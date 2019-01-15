<template>
  <el-container class="home-page">
    <el-header class="header">
      <el-row>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="1"><a href="#">learn Skills</a></el-menu-item>
          <el-menu-item index="2"><a href="#">PreOrder Medicine</a></el-menu-item>
          <el-menu-item index="3"><a href="#">Clinic & Pharmacy Locator</a></el-menu-item>
          <el-menu-item index="4"><a href="#">Ask a Question</a></el-menu-item>
          <el-menu-item index="5"><a href="#">Log in</a></el-menu-item>
          <el-menu-item index="6">
            <el-button
              type="success"
              round
            >SIGN UP</el-button>
          </el-menu-item>
          <el-menu-item index="7"><a href="#">Rinyarwanda English</a></el-menu-item>
        </el-menu>
      </el-row>
    </el-header>
    <el-main>
      <div class="operations-bar">
        <i></i>
        <p>Welcome to CyberRwanda.Resources for</p>
        <p>your relationships,your body and your future</p>
        <el-button
          type="success"
          round
        >Learn skills</el-button>
        <el-button
          type="success"
          round
        >pre-order medicine</el-button>
        <el-button
          type="success"
          round
        >ask a question</el-button>
      </div>
      <div class="learn-skills">
        <h4>Learn Skills</h4>
        <div class="skills-ctn">
          <ul>
            <li>
              <h6>Munezero 17</h6>
            </li>
            <li>
              <h6>Munezero 17</h6>
            </li>
            <li>
              <h6>Munezero 17</h6>
            </li>
          </ul>
          <el-button
            type="success"
            round
          >start Learning</el-button>
        </div>
      </div>
    </el-main>
    <el-footer>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">about us ContactUs</div>
        </el-col>
        <el-col :span="6" :offset="12">
          <div class="grid-content bg-purple">Follow us on</div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
export default {};
</script>

<style scoped>
.home-page {
  text-align: center;
  margin: auto;
  background: green;
}
.header {
  text-align: center;
  margin: auto;
}
.operations-bar {
  text-align: center;
}
.skills-ctn ul li {
  display: inline-block;
  width: 400px;
  height: 300px;
  background: #fff;
}
.bg-purple{
  color: #fff;
}
</style>



