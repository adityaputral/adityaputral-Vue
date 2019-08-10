<template>
  <div class="contact">
    <h1 class="title">
      <span>Contact</span>
    </h1>

    <div class="contact-section">
      <span class="contact-intro">Any question? Reach out to me and I will get back to you shortly.</span>

      <div>
        <form action="/" method="post" class="contact-form">
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <textarea
            name="message"
            id="contact-message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>

          <button type="submit" class="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style>
.contact {
  background: linear-gradient(to top, #383c4a, #585c68);
}

.contact-section {
  color: white;
  text-align: center;
  margin-top: 30px;
}

.contact-section .contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-section .contact-form input {
  width: 50%;
  margin-top: 30px;
  padding: 15px 20px;
}

.contact-section .contact-form textarea {
  width: 50%;
  margin-top: 30px;
}

.btn-submit {
  margin-top: 30px;
}

@media screen and (max-width: 425px) {
  .contact {
    padding: 30% 30px;
  }

  .contact-section .contact-form input {
    width: 100%;
    margin-top: 30px;
    padding: 5px 5px;
  }

  .contact-section .contact-form textarea {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
