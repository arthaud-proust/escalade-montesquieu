// const anchorme = require("anchorme").default;
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
try {
    window._last_message_id = window._messages[window._messages.length-1].id;
    localStorage.setItem(`${window._forum}.last_message`, (new Date(window._messages[window._messages.length-1].created_at)).getTime());
} catch(e) {
    window._last_message_id = 0;
}

const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');


function getDate(datetime, withMinutes=true, withYear=false) {
    let date = datetime===undefined?'': new Date(datetime.replace(/-/g, "/"));
    const twoDigits = (n)=>n==0?'':(n.toString().length==1?"0"+n:n);
    return `${date.getDate()} ${months[date.getMonth()]} ${withYear?`<small>${date.getFullYear()}</small>`:''} ${withMinutes?`à ${twoDigits(date.getHours())}h${twoDigits(date.getMinutes())}`:''}`
}

function getMessage(message) {
    const content = anchorme({
        input:message.content,
        extensions: [
            // an extension for mentions
            {
                test: /@(\w|_)+/gi,
                transform: (string) =>
                    `<a href="http://escalade-montesquieu.fr/profil/${string.substr(1).replace(/(_)+/gi," ")}">${string}</a>`,
            }
        ],
    })
    return `
    <div class="MessageCard ${message.author == window._user?'myMessage':'theirMessage'}" id="message-${message.id}">
        <a class="MessageCard-author" href="/profil/${message.author_uuid}" target="blank">
                <img class="MessageCard-author-img" src="/profil/${message.author_uuid}/img">
                <h5 class="MessageCard-author-name">
                    ${message.author}
                </h5>
            </a>
        <p class="MessageCard-text ">
            ${content}
        </p>
        <span class="MessageCard-datetime">${getDate(message.created_at)}</span>
    </div>
    `
}

function addMessage(msg) {
    $('#MessagesList').append(getMessage(msg));
    $(".ForumLayout-messagesList").animate({ scrollTop: $('.ForumLayout-messagesList').prop("scrollHeight") }, 500);
}

function rendMessages(messages) {
    $('#MessagesList').html(
        messages.map(msg=>getMessage(msg))
    )
    setTimeout(()=>{
        $(".ForumLayout-messagesList").animate({ scrollTop: $('.ForumLayout-messagesList').prop("scrollHeight") }, 250);
    },500)

}

function sendMessage() {
    if (!$('#MessageForm-input').val().match(/\S/gm)) return
    let content = $('#MessageForm-input').val();
    $('#MessageForm-input').val('');

    $('.MessageForm').addClass('inProgress');

    axios({method: 'post', url: `/message/send`, data: {
        forum: window._forum,
        content
    }}).then(r=>{
        $('.MessageForm').removeClass('inProgress');
        window._last_message_id = r.data.message.id;
    });
}

function fetchMessages() {
    return new Promise(resolve => {
        console.log(`Fetching messages... (last: ${window._last_message_id})`)
        axios({
            method: 'post',
            url: 'https://escalade-montesquieu-pusher.herokuapp.com/fetch',
            // url: 'http://localhost:8001/fetch',
            timeout: 30 * 1000, // 10 minutes
            data: formUrlEncoded({last_message_id: window._last_message_id, forum: window._forum})
        }).then(r=>{  
            r.data.forEach(message=>{
                if(message.id > window._last_message_id) {
                    window._last_message_id = message.id
                    localStorage.setItem(`${window._forum}.last_message`, (new Date(message.created_at)).getTime());
                }
                addMessage(message);        
                window._messages.push(message);
            })

            fetchMessages().then(()=>resolve(r));
        }).catch(e=>{
            fetchMessages();
        });
    });
}

$(()=>{
    $('#MessageForm-send').click(sendMessage);
    $('#MessageForm-input').keyup(function(e) {
        if(e.which == 13) {
            sendMessage()
        }
    });
    rendMessages(window._messages);
    fetchMessages();
});