<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.firstName"
        placeholder="First Name"
        style="width: 200px; margin-right: 10px"
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
      />
      <el-input
        v-model="listQuery.lastName"
        placeholder="Last Name"
        style="width: 200px; margin-right: 10px"
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
      />
      <el-input
        v-model="listQuery.discipline"
        placeholder="Discipline"
        style="width: 200px; margin-right: 10px"
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
      />
      <el-input
        v-model="listQuery.role"
        placeholder="Role"
        style="width: 200px; margin-right: 10px"
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
      />
      <el-input
        v-model="listQuery.university"
        placeholder="University"
        style="width: 200px; margin-right: 10px"
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
      />
      <el-input
        v-model="listQuery.rank"
        placeholder="Rank"
        style="width: 100px; margin-right: 10px"
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
      />
      <el-select
        v-model="listQuery.projectName"
        placeholder="MSI"
        class="filter-item"
        clearable
        @change="handleFilter"
      >
        <el-option
          v-for="item in projectNameList"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        style="margin-left: 10px"
        @click="getList"
      >
        Search
      </el-button>
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-edit"
        style="margin-left: 5px"
        @click="handleCreate"
      >
        Add
      </el-button>

    </div>
    <el-table
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @sort-change="sortChange"
    >
      <el-table-column
        label="ID"
        prop="id"
        sortable="custom"
        align="center"
        width="100"
      />
      <el-table-column
        label="First Name"
        width="120"
        align="center"
        prop="firstName"
      />
      <el-table-column
        label="Last Name"
        width="120"
        align="center"
        prop="lastName"
      />
      <el-table-column
        label="E-mail"
        width="200"
        align="center"
        prop="email"
      />
      <el-table-column
        label="Discipline"
        width="200"
        align="center"
        prop="discipline"
      />
      <el-table-column
        label="University"
        width="200"
        align="center"
        prop="university"
      />
      <el-table-column
        label="Rank"
        width="100"
        align="center"
        prop="r1_r2"
      />
      <el-table-column
        label="Role"
        width="200"
        align="center"
        prop="role"
      />
      <!--      <el-table-column-->
      <!--        label="Project"-->
      <!--        width="150"-->
      <!--        align="center"-->
      <!--        prop="projectName"-->
      <!--      >-->
      <!--      </el-table-column>-->
      <el-table-column label="Operation" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          > Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.pageSize"
      @pagination="getList"
    />

  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import waves from '@/directive/waves/waves'
import { listHR, getProjectName } from '@/api/HR'

export default {
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      listQuery: {},
      projectNameList: [],
      tableKey: 0,
      list: [],
      total: 0
    }
  },
  created() {
    this.parseQuery()
  },
  mounted() {
    this.getList()
    this.getProjectNameList()
  },
  methods: {
    parseQuery() {
      const listQuery = {
        page: 1,
        size: 20
      }
      this.listQuery = { ...listQuery, ...this.listQuery }
    },
    getList() {
      console.log('listQuery', this.listQuery)
      listHR(this.listQuery).then(response => {
        const { list, count } = response.data
        this.list = list
        this.total = count
      })
    },
    getProjectNameList() {
      getProjectName().then(response => {
        this.projectNameList = response.data
        console.log(this.projectNameList)
      })
    },
    handleFilter() {
      console.log('handleFilter', this.listQuery)
    },
    handleCreate() {
      this.$router.push('/HR/create')
    },
    sortChange(data) {
      console.log('sortChange', data)
    },
    handleEdit(index, row) {
      console.log(index, row)
      // jump to edit
      this.$router.push('/HR/create')
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }

}
</script>

<style scoped>

</style>
