<template>
  <!-- SIGN IN -->
  <form action="#" method="POST" name="loginForm" id="loginForm" class="loginBody">
    <section>
      <!-- Header -->
      <img src="../assets/img/logo.png" width="125" alt="Logo">
      <br>
      <br>
      <br>
      <div class="details" style="padding: 40px 0px;">
        <!-- Username -->
        <div class="form-group mb-3">
          <input
            type="text"
            name="username"
            id="username"
            class="form-control"
            placeholder="Username"
            required
          >
        </div>
        <!-- Password -->
        <div class="form-group mb-5">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Password"
            required
          >
        </div>
        <!-- Sign Btn -->
        <div class="loginFoot">
          <div class="form-group">
            <input
              type="submit"
              class="btn btn-success"
              style="width: 100%; padding: 15px;"
              value="Sign in"
            >
          </div>
        </div>
        <small>
          <div>
            Don't have an account?,
            <router-link id="regBtn" to="/">Sign up</router-link>
          </div>
        </small>
      </div>
      <!-- Footer -->
      <footer class="footer text-muted float-right" style="padding: 10px;">
        <small>&copy; 2019, Coope, Inc.</small>
      </footer>
      <br>
      <br>
    </section>
  </form>
  <!-- END OF SIGN IN -->
</template>
