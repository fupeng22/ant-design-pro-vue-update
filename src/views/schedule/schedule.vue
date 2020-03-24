<template>
  <a-card :bordered="false">
    <!-- 表头区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="12" :sm="24">
            <a-form-item label="客户">
              <a-select placeholder="请选择客户" v-model="formParam.customer">
                <a-select-option value="1">遥望网络科技有限公司</a-select-option>
                <a-select-option value="2">...</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="项目:">
              <a-select placeholder="请选择项目" v-model="formParam.project">
                <a-select-option value="1">...</a-select-option>
                <a-select-option value="2">...</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="48">
          <a-col :md="12" :sm="24">
            <a-form-item label="计划编制人">
              <a-input placeholder="请输入编制人" v-model="formParam.user"/>
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="编制日期:">
              <a-date-picker style="width: 100%" :format="dateFormat" v-model="formParam.createdTime"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
    </div>
    <!-- table区域-begin -->
    <div>
      <a-table
        bordered
        :dataSource="dataSource"
        :columns="columns"
        :scroll="{ x: 2000, y: 500 }"
        :components="components"
        :row-key="(dataSource) => dataSource.key">
        <template v-for="(item) of keyArr" v-slot:[item.key]="text, props">
          <div :key="item.key">
            <template v-if="item.type === 'edit'">
              {{ text }}
            </template>
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
          </div>
        </template>
      </a-table>
    </div>
  </a-card>
</template>
<script>
import moment from 'moment'
import scheduleCell from './model/schedule-cell'
import { store, mutations } from '../../store/application'

const CustomCell = (record, rowIndex) => {
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

const columns = [
  {
    key: '0',
    title: '开始日期',
    dataIndex: 'createTime',
    width: '120',
    align: 'center',
    scopedSlots: { customRender: 'createTime' },
    customCell: CustomCell
  },
  {
    key: '1',
    title: '工作内容',
    dataIndex: 'content',
    width: '100',
    align: 'center',
    scopedSlots: { customRender: 'content' },
    customCell: CustomCell
  },
  {
    key: '2',
    title: '工作方式',
    dataIndex: 'mode',
    width: '100',
    align: 'center',
    scopedSlots: { customRender: 'mode' },
    customCell: CustomCell
  },
  {
    key: '3',
    title: '计划状态',
    dataIndex: 'planStatus',
    width: '100',
    align: 'center',
    scopedSlots: { customRender: 'planStatus' },
    customCell: CustomCell
  },
  {
    key: '4',
    title: '要求完成时间',
    dataIndex: 'requiredTime',
    width: '120',
    align: 'center',
    scopedSlots: { customRender: 'requiredTime' },
    customCell: CustomCell
  },
  {
    key: '5',
    title: '说明',
    dataIndex: 'explain',
    width: '100',
    align: 'center',
    scopedSlots: { customRender: 'explain' },
    customCell: CustomCell
  },
  {
    title: '负责人',
    children: [
      {
        key: '6',
        title: '客户负责人',
        dataIndex: 'customerPserson',
        width: '100',
        align: 'center',
        scopedSlots: { customRender: 'customerPserson' },
        customCell: CustomCell
      },
      {
        key: '7',
        title: '我方负责人',
        dataIndex: 'ourPerson',
        width: '100',
        align: 'center',
        scopedSlots: { customRender: 'ourPerson' },
        customCell: CustomCell
      }
    ]
  },
  {
    key: '8',
    title: '其他参与人',
    dataIndex: 'otherPerson',
    width: '100',
    align: 'center',
    scopedSlots: { customRender: 'otherPerson' },
    customCell: CustomCell
  },
  {
    key: '9',
    title: '完成情况',
    dataIndex: 'completion',
    width: '100',
    align: 'center',
    scopedSlots: { customRender: 'completion' },
    customCell: CustomCell
  }
]
const draggingMap = {}
columns.forEach(col => {
  if (col.children !== undefined) {
    const clim = col.children
    clim.forEach(item => {
      draggingMap[item.key] = item.width
    })
  }
  draggingMap[col.key] = col.width
})
const draggingState = mutations.SetDraggingMap(draggingMap)
const keyArray = [
  { key: 'createTime', type: 'date' },
  { key: 'content', type: 'input' },
  { key: 'mode', type: 'select', option: ['开发', '其它'] },
  { key: 'planStatus', type: 'select', option: ['计划', '执行', '完成'] },
  { key: 'requiredTime', type: 'date' },
  { key: 'explain', type: 'input' },
  { key: 'customerPserson', type: 'select', option: ['...', '...', '...', '...'] },
  { key: 'ourPerson', type: 'select', option: ['夏同满', '柯家强', '童建升', '魏宏康'] },
  { key: 'otherPerson', type: 'input' },
  { key: 'completion', type: 'input' }
]
export default {
  name: 'Schedule',
  components: {
    scheduleCell
  },
  data () {
    return {
      components: {
        header: {
          cell: this.ResizeableTitle
        }
      },
      draggingState: store.draggingState,
      formParam: [],
      dateFormat: 'YYYY-MM-DD',
      settingColumns: [],
      columns,
      dataSource: [
        {
          key: '0',
          status: 'check',
          createTime: moment(Date.now()).format('YYYY-MM-DD'),
          requiredTime: moment(Date.now()).format('YYYY-MM-DD')
        }
      ],
      keyArr: [],
      text: '',
      iconType: ['check'],
      data: []
    }
  },
  methods: {
    moment,
    ResizeableTitle: (h, props, children) => {
      let thDom = null
      const { key, ...restProps } = props
      const col = columns.find(col => {
        const k = col.dataIndex || col.key
        return k === key
      })
      if (!col.width) {
        return <th {...restProps}>{children}</th>
      }
      const onDrag = (x, y) => {
        draggingState[key] = 0
        col.width = Math.max(x, 1)
      }

      const onDragstop = () => {
        draggingState[key] = thDom.getBoundingClientRect().width
      }
      return (
        <th {...restProps} v-ant-ref={r => (thDom = r)} width={col.width} class="resize-table-th">
          {children}
          <vue-draggable-resizable
            key={col.key}
            class="table-draggable-handle"
            w={10}
            x={draggingState[key] || col.width}
            z={1}
            axis="x"
            draggable={true}
            resizable={false}
            onDragging={onDrag}
            onDragstop={onDragstop}
          ></vue-draggable-resizable>
        </th>
      )
    },
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
    init () {
      this.keyArr = keyArray
      this.columns = columns
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
    }
  },
  created () {
    this.init()
  }

}
</script>
<style scoped>
.cell-select {
  width: 80%;
}

.resize-table-th {
  position: relative;
}

.table-draggable-handle {
  height: 100% !important;
  bottom: 0;
  left: auto !important;
  right: -5px;
  cursor: col-resize;
  touch-action: none;
}
</style>
