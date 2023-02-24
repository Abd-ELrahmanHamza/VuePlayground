<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="text" name="email" id="email" v-model="email" />
      <label>Password:</label>
      <input type="password" name="password" id="password" v-model="password" />
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
      <label>Role:</label>
      <select v-model="role">
        <option value="developer">Web developer</option>
        <option value="designer">Web Designer</option>
      </select>
      <div class="terms">
        <input type="checkbox" name="terms" id="terms" v-model="terms" />
        <label for="terms">I agree to the terms and conditions</label>
      </div>
      <div>
        <input type="checkbox" value="shaun" v-model="names" />
        <label>Shaun</label>
      </div>
      <div>
        <input type="checkbox" value="yoshi" v-model="names" />
        <label>Yoshi</label>
      </div>
      <div>
        <input type="checkbox" value="mario" v-model="names" />
        <label>Mario</label>
      </div>

      <label for="">Skills: </label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>

      <div class="submit">
        <button>Create an account</button>
      </div>
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>terms: {{ terms }}</p>
    <p>names: {{ names }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill.length > 0) {
        if (this.skills.includes(this.tempSkill)) return;
        this.skills.push(this.tempSkill);
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 characters";
      if (!this.passwordError) {
        console.log("submitting");
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
