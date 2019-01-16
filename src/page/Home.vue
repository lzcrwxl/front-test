<template>
  <el-container class="home-page">
    <el-header class="header">
      <el-row>
        <el-menu
          class="el-menu"
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
    <main class="main-container">
      <div class="main-functions clearfix">
        <i></i>
        <h4>Welcome to CyberRwanda.Resources for your relationships,your body and your future</h4>
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
      <div class="wh-section">
        <div class="skills-ctn wr">
          <h4 class="subtitle">Learn Skills</h4>
          <ul>
            <li
              v-for="item in skills"
              :key="item.id"
            >
              <img
                :src="item.src"
                alt=""
              >
              <h6>Munezero 17</h6>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <div class="skill-bottom">
                <div class="name">Key Topic</div>
                <div class="label-bar">
                  <span>xxxxxxxxxxx</span>
                  <span>xxxxxxxxxxx</span>
                  <span>xxxxxxxxxxx</span>
                </div>
              </div>
            </li>
          </ul>
          <el-button
            type="success"
            round
          >start Learning</el-button>
        </div>
        <div class="order-ctn wr">
          <h4 class="subtitle">Order Medicine</h4>
          <div class="order-pannel">
            <dl v-for="item in orders" :key="item.text">
              <dt><img src="../assets/imgs/Special/Shield.svg" alt=""></dt>
              <dd>xxxxx</dd>
              <dd>xxxxx</dd>
              <dd>xxxxx</dd>
            </dl>
          </div>
        </div>
        <div class="find-ctn wr">
          <h4 class="subtitle">Find a Clinic</h4>
          <div class="find-pannel">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum, at illo doloribus quibusdam fuga quos officiis voluptate quod id, eius doloremque et sit ducimus corporis sequi neque suscipit deserunt!</p>
            <el-input
              v-model="input"
              placeholder="Search"
              class="searchInput"
              suffix-icon="el-icon-search"
            ></el-input>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content">about us ContactUs</div>
        </el-col>
        <el-col
          :span="6"
          :offset="12"
        >
          <div class="grid-content">Follow us on</div>
        </el-col>
      </el-row>
    </footer>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "Munezero",
          id: 1,
          src: require("../assets/imgs/Profile/Happy.svg")
        },
        {
          name: "Munezero",
          id: 2,
          src: require("../assets/imgs/Profile/Mama.svg")
        },
        {
          name: "Munezero",
          id: 3,
          src: require("../assets/imgs/Profile/Munezero.svg")
        },
        {
          name: "Munezero",
          id: 4,
          src: require("../assets/imgs/Profile/Mutoni.svg")
        },
        {
          name: "Munezero",
          id: 5,
          src: require("../assets/imgs/Profile/Ntwali.svg")
        },
        {
          name: "Munezero",
          id: 6,
          src: require("../assets/imgs/Profile/Nurse.svg")
        }
      ],
      orders:[
        {text:'xxxxxxx'},
        {text:'xxxxxxx'},
        {text:'xxxxxxx'},
        {text:'xxxxxxx'},
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.subtitle {
  text-align: left;
  font-size: 24px;
  height: 150px;
  line-height: 150px;
}
.split {
  height: 10px;
  background: url(../assets/imgs/Heart.svg);
  background-size: auto 10px;
}
.wr {
  width: 1000px;
  margin: 0 auto;
}
.clearfix:after {
  content: "";
  height: 0; //高度为0
  line-height: 0; //行高为0
  display: block; //将文本转为块级元素
  visibility: hidden; //将元素隐藏
  clear: both//清除浮动;
}
.clearfix {
  zoom: 1;
}
$bc: #37767b;
.home-page {
  text-align: center;
  margin: auto;
  background: url(../assets/imgs/Desktop.svg);
  .header {
    text-align: center;
    margin: auto;
    .el-menu {
      background: transparent;
      color: #fff;
    }
  }
  .main-container {
    margin: 100px 0;
    .main-functions {
      height: 250px;
      text-align: center;
      background: #fff;
      text-align: center;
      position: relative;
      padding-top: 50px;
      padding-bottom: 30px;
      i {
        width: 80px;
        height: 80px;
        position: absolute;
        background: url(../assets/imgs/logos_3.0-02.png) no-repeat center;
        background-size: cover;
        top: -30px;
        z-index: 99;
      }
      h4 {
        line-height: 40px;
        margin: 0 auto 20px;
        font-size: 30px;
        color: $bc;
        width: 800px;
      }
    }
    .wh-section {
      margin-top: 200px;
      background: #fff;
      overflow: hidden;
      .skills-ctn {
        margin-bottom: 40px;
        ul {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            img {
              left: 50%;
              top: -36px;
              position: absolute;
              transform: translateX(-50%);
            }
            position: relative;
            margin-bottom: 50px;
            padding: 0 50px;
            background: #effbf0;
            display: inline-block;
            width: 450px;
            height: 300px;
            h6 {
              margin-top: 50px;
              color: $bc;
              font-size: 20px;
            }
            p {
              margin-top: 20px;
              text-align: justify;
              font-size: 14px;
              line-height: 20px;
            }
            .skill-bottom {
              bottom: 80px;
              position: absolute;
              left: 50px;
              .name {
                text-align: left;
                color: #999;
              }
              .label-bar {
                margin-top: 10px;
                span {
                  display: inline-block;
                  margin-right: 10px;
                  font-size: 12px;
                  color: $bc;
                  height: 20px;
                  line-height: 20px;
                  background: #a8e3d2;
                  padding: 0 20px;
                }
              }
            }
          }
        }
      }
      .order-ctn {
        .order-pannel {
          height: 300px;
          padding: 0 20px;
          background: #effbf0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          dl{
            dt{
              width: 50px;
              height: 50px;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      .find-ctn {
        margin-bottom: 200px;
        .find-pannel {
          text-align: left;
          p {
            text-align: left;
            margin-bottom: 20px;
            line-height: 20px;
            font-size: 14px;
          }
          .searchInput {
            text-align: left;
            width: 200px;
          }
        }
      }
    }
  }
  footer {
    height: 200px;
    .grid-content {
      color: #fff;
    }
  }
}
</style>



