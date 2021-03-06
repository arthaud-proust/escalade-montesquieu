@extends('layouts.app', ['requirementsJs' => ['app']])

@section('title', 'Inscription')
@section('content')
<div class="AuthLayout">
    <div class="container">
    <div class="AuthLayout-leftImg d-none d-md-block" id="leftImg">
    </div>
    <div class="AuthLayout-form col-md-7">
        <form class="AuthForm col-md-9" method="POST" action="{{ route('register') }}">
            @csrf
            <h1 class="AuthForm-title">Créer un compte</h1>
            <div class="FieldSection">
                <section class="Field text @error('name') is-invalid @enderror">
                    <label class="Field-label" for="name">Prénom et nom de famille</label>
                    <input class="Field-input" id="name" name="name" type="name" value="{{ old('name') ? old('name') : '' }}" placeholder="Alex Honnold">
                    <small class="Field-info onFocus">Non modifiable par la suite.</small>
                    @error('name')
                        <span class="Field-invalidFeedback" role="alert">{{ $message }}</span>
                    @enderror
                </section>
                <section class="Field text @error('email') is-invalid @enderror">
                    <label class="Field-label" for="email">E-mail</label>
                    <input class="Field-input" id="email" name="email" type="email" value="{{ old('email') ? old('email') : '' }}" placeholder="exemple@mail.com">
                    <small class="Field-info onFocus">Utilisé pour vous connecter.</small>
                    @error('email')
                        <span class="Field-invalidFeedback" role="alert">{{ $message }}</span>
                    @enderror
                </section>
            </div>
            <div class="FieldSection">
                <section class="Field password @error('password') is-invalid @enderror">
                    <label class="Field-label" for="password">Choisissez un mot de passe</label>
                    <input class="Field-input" id="password" name="password" type="password" value="{{ old('password') ? old('password') : '' }}">
                    <img src="/assets/svg/eye-off.svg" class="Field-toggleVisibility">
                    <small class="Field-info onFocus">Conseillé: minimum 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial.</small>
                    @error('password')
                        <span class="Field-invalidFeedback" role="alert">{{ $message }}</span>
                    @enderror
                </section>
                <section class="Field password @error('password-confirmation') is-invalid @enderror">
                    <label class="Field-label" for="password-confirmation">Confirmer le mot de passe</label>
                    <input class="Field-input" id="password-confirmation" name="password-confirmation" type="password" value="{{ old('password-confirmation') ? old('password-confirmation') : '' }}">
                    <img src="/assets/svg/eye-off.svg" class="Field-toggleVisibility">
                    <small class="Field-info onFocus">Réécrivez le mot de passe de ce compte afin d'éviter une faute de frappe.</small>
                    @error('password-confirmation')
                        <span class="Field-invalidFeedback" role="alert">{{ $message }}</span>
                    @enderror
                </section>
            </div>
            <div class="AuthForm-actions">
                <a href="{{ route('login') }}" class="col-md-6 btn btn-white backlink">J'ai déjà un compte</a>
                <button class="col-md-6 btn btn-dark" type="submit">Créer mon compte</button>
            </div>
            <div class="AuthForm-info">
                <small>En vous inscrivant vous acceptez les <a href="conditions-utilisation">conditions d'utilisation</a></small>
            </div>
        </form>
    </div>
    <div class="AuthLayout-rightImg d-none d-md-block" id="rightImg">
    </div>
    </div>
</div>
<script>
if(window.screen.width >= 768) {
    var imgLeft=document.createElement('img');
    imgLeft.setAttribute('alt',"");
    imgLeft.src='{{ asset('assets/img/auth-left-img.jpg') }}';
    document.getElementById('leftImg').appendChild(imgLeft);
    
    var imgRight=document.createElement('img');
    imgRight.setAttribute('alt',"");
    imgRight.src='{{ asset('assets/img/auth-right-img.jpg') }}';
    document.getElementById('rightImg').appendChild(imgRight);

}
</script>
@endsection
