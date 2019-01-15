<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
  >
    <el-table-column
      fixed
      prop="role"
      label="Role"
      width="150"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="Pharmacist Name"
      width="120"
    >
    </el-table-column>
    <el-table-column
      prop="phone"
      label="Phone"
      width="120"
    >
    </el-table-column>
    <el-table-column
      prop="city"
      label="Email"
      width="120"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="Receiving Order alerts?"
      width="300"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          @click="handleClick(scope.row)"
          type="text"
          size="small"
        >查看</el-button>
        <el-button
          type="text"
          size="small"
        >编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          role: "assistant",
          name: "王小虎",
          phone: "13333333333",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          role: "assistant",
          name: "王小虎",
          phone: "13333333333",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          role: "assistant",
          name: "王小虎",
          phone: "13333333333",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>


