<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
             <h3>ZIRO TO DO</h3>
            </div>

            <!-- Login Form -->
            <form>
            <input type="text" id="login" class="fadeIn second" name="user_name" placeholder="User Name">
            <input type="text" id="login" class="fadeIn third" name="user_firstname" placeholder="First Name">
            <input type="text" id="login" class="fadeIn fourth" name="user_lastname" placeholder="Last Name">
            <input type="text" id="login" class="fadeIn fifth" name="user_email_address" placeholder="Email Address">
            <input type="text" id="login" class="fadeIn sixth" name="user_password" placeholder="Password">
            <input type="text" id="password" class="fadeIn seventh" name="user_passwordConfirm" placeholder="Password Confirm">
            <input type="submit" class="fadeIn eighth" value="Sign Up">
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <router-link class="underlineHover" to="/forgot-password">Forgot Password?</router-link>
            
            <router-link class="underlineHover" to="/login"> Signin</router-link> 
            </div>

        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
