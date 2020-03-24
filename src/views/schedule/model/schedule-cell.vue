<template>
  <div v-if="item.type === 'edit'">
    <span>{{text}}</span>
  </div>
  <a-select
    class="cell-select"
    @change="(e) => handleChange(e, props.key, item.key, item.type)"
    v-else-if="item.type === 'select'">
    <a-select-option v-for="op of item.option" :key="op" :value="op">{{ op }}</a-select-option>
  </a-select>
  <a-date-picker
    :allowClear="false"
    @change="(e) => handleChange(e, props[item.key].key, item.key, item.type)"
    v-else-if="item.type === 'date'"
    :format="dateFormat"/>
  <a-input
    v-else-if="item.type === 'input'"
    :value="text"
    @change="(e) => handleChange(e, props.key, item.key, item.type)"/>
</template>
<script>
import moment from 'moment'

export default {
  name: 'schedule-cell',
  props: {
    text: String,
    rowData: Array
  },
  data () {
    return {}
  },
  methods: {
    moment,
    handleChange (event, key, column, type) {
      console.log(event, key, column, type, 'handleChange')
      let value = ''
      if (type === 'date') {
        value = moment(event).format('YYYY-MM-DD')
      } else if (type === 'select') {
        value = event
      } else {
        value = event.target.value
      }
      const newData = [...this.dataSource]
      const target = newData.filter((item) => key === item.key)[0]
      if (target) {
        target[column] = value
        this.dataSource = newData
      }
    },
    onCellChange (key) {
      console.log(key, 'onCellChange')
      // const dataSource = [...this.dataSource];
      // const target = dataSource.find((item) => item.key === key);
      // if (target) {
      //     target[dataIndex] = value;
      //     this.dataSource = dataSource;
      // }
    },
    handleAdd () {
      const { dataSource } = this
      const count = dataSource.length
      const date = moment(Date.now()).format('YYYY-MM-DD')
      const newData = { key: count, status: 'check', createTime: date, requiredTime: date }
      this.dataSource = [...dataSource, newData]
    },

    handleCell (record) {
      console.log(record, 'handelCell')
    },
    CustomCell (record, rowIndex) {
      return {
        on: {
          dblclick: (event) => {
            if (event.target.localName === 'input') {
              return true
            }
            record.status = record.status === 'edit' ? 'check' : 'edit'
            console.log(record, rowIndex, event.target.localName, 'custom-cell')
          },
          contextmenu: (event) => {
            console.log(event, 'custom-cell')
          }
        }
      }
    }
  }
}
</script>
<style scoped>
</style>
