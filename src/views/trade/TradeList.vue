<template>
  <a-card :bordered="true">
    <a-table :dataSource="list" :rowKey="list => list.bI_ID" :columns="columns" bordered>
      <span slot="bI_Code" slot-scope="text, record">
        <a href="javascript:void(0)" @click="viewDetail(record)">{{ text }}</a>
      </span>
    </a-table>
  </a-card>
</template>
<script>
import { LoadApprovalBasicInfo, GetMyRelatedListPagination } from '@/api/trade/index'
export default {
    name: 'TradeList',
    data () {
        return {
            queryParam: 'pageSize=10&pageIndex=1&sortName=bI_Code&sortType=desc',
            queryParamByOne: {
                biId: 620128
            },
            info: {},
            list: [],
            columns: [{
              title: '编号',
              dataIndex: 'bI_Code',
              scopedSlots: { customRender: 'bI_Code' }
            }, {
              title: '申请人姓名',
              dataIndex: 'bI_ApplicantName'
            }, {
              title: '部门',
              dataIndex: 'bI_DeptName',
              sorter: true
            }, {
              title: '申请时间',
              dataIndex: 'bI_CreateDate'
            }, {
              title: '摘要',
              dataIndex: 'bI_ProjectName'
            }, {
              title: '流程',
              dataIndex: 'bI_ProcessName'
            }, {
              title: '决裁号',
              dataIndex: 'bI_ApprovalNumber'
            }]
        }
    },
    methods: {
        queryApprovalBasicInfo () {
            const { $message } = this
            LoadApprovalBasicInfo(this.queryParamByOne).then(res => {
                this.list = res.reponse
            }).catch(err => {
                $message.error(`load user err: ${err.message}`)
            })
        },
        queryMyRelatedListPagination () {
            GetMyRelatedListPagination(this.queryParam).then(res => {
                this.list = res.reponse
            })
        },
        viewDetail (record) {
          console.info(record)
        }
    },
    activated () {
      this.queryMyRelatedListPagination()
    }
}
</script>
<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
</style>
