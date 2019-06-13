<template>
  <!-- SIGN UP -->
  <form action="#" method="POST" name="regForm" id="regForm" class="regBody">
    <section>
      <!-- Header -->
      <img src="../assets/img/logo.png" width="125" alt="Logo">
      <br>
      <br>
      <br>
      <div class="details" style="padding: 20px 0px;">
        <!-- Full Name -->
        <div class="form-group mb-3">
          <input
            type="text"
            name="fullname"
            id="fullname"
            class="form-control"
            placeholder="Enter full name"
            required
          >
        </div>
        <div class="form-row align-items-center">
          <!-- Username -->
          <div class="col-lg-6 mb-3">
            <input
              type="text"
              name="username"
              id="username"
              class="form-control"
              placeholder="Pick a username"
              required
            >
          </div>
          <!-- Email -->
          <div class="col-lg-6 mb-3">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Enter email"
              required
            >
          </div>
        </div>
        <!-- Password -->
        <div class="form-group mb-3">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            aria-describedby="passwordHelp"
            placeholder="Create a password"
            minlength="6"
            maxlength="30"
            required
          >
          <small id="passwordHelp" class="form-text text-muted">
            Password must be up to 6 - 30
            characters.
          </small>
        </div>
      </div>
      <!-- Sign Btn -->
      <div class="regFoot">
        <div class="form-group">
          <input
            type="submit"
            id="submitForm"
            class="btn btn-success"
            style="margin-bottom: 5px; padding: 15px; width: 100%;"
            aria-describedby="submitFormHelp"
            value="Sign up with Coope"
          >

          <!-- Not visible on page!. -->
          <small id="submitFormHelp" style="display: none;" class="form-text text-muted">
            By
            clicking
            <i>"Sign up with Coope"</i>,
            you agree to our
            <a href="#">terms of services</a>,
            <a href="#">privacy policy</a>
            and
            <a href="#">cookie policy</a>.
          </small>
          <small>
            <div style="padding: 10px 0px;">
              Already have an account?,
              <router-link id="loginBtn" to="/signin">Sign in</router-link>
            </div>
          </small>
        </div>
      </div>
      <!-- Footer -->
      <footer class="footer text-muted float-right" style="padding: 10px;">
        <small>&copy; 2019, Coope, Inc.</small>
      </footer>
      <br>
      <br>
    </section>
  </form>
  <!-- END OF SIGN UP -->
</template>
