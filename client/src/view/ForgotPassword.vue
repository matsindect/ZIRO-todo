<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
            {{msg}}
            </div>

            <!-- Login Form -->
            <form>
            <input type="text" id="login" class="fadeIn second" name="user_email_address" placeholder="Email Address">
            <input type="submit" class="fadeIn third" value="Sign Up">
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <a class="underlineHover" href="#">Sign in</a>
            </div>

        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
