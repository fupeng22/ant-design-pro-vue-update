<template>
  <div>
    <a-row :gutter="1">
      <a-col :lg="18" :md="12" :sm="24">
        <a-card title="商品PL" :bordered="true" type="inner" >
          <a-table :dataSource="t81List" :rowKey="t81List => t81List.t81_ID" :columns="t81columns" bordered>
            <template slot="t81slot" slot-scope="text, record">
              <a @click="handleT81ItemClick(record.t81_ID)" v-show="record.t81_M101_ID === 1 || record.t81_M101_ID === 2">其他直接销售费</a>
            </template>
          </a-table>
        </a-card>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-card title="类型 理由及对策" :bordered="true" type="inner" >
          <a-textarea
            placeholder=""
            :auto-size="{ minRows: 2 }"
          />
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="1">
      <a-card title="PL明细项目" :bordered="true" type="inner" >
        <a-table :dataSource="t811List" :rowKey="t811List => t811List.t81_ID" :columns="t811columns" bordered>
        </a-table>
      </a-card>
    </a-row>
  </div>
</template>
<script>
import { LoadBAppT81, LoadBAppT81LCR, LoadBAppT811 } from '@/api/trade/tradeNew'
export default {
    name: 'ShowPl',
    props: {
      t8Id: {
        type: Number,
        default: 0
      },
      biId: {
        type: Number,
        default: 0
      }
    },
    watch: {
      biId (val) {
        this.queryBAppT81()
      },
      t8Id (val) {
        this.queryBAppT81()
      }
    },
    data () {
        return {
          queryParamByOne: {
            biId: this.biId
          },
          queryParamByOne1: {
            biId: this.biId,
            t8Id: this.t8Id
          },
          queryParamByOne2: {
            biId: this.biId,
            t81Id: 0
          },
          t81List: {
          },
          t811List: {
          },
          t81columns: [{
            title: '',
            dataIndex: 't81_ID',
            scopedSlots: { customRender: 't81slot' }
          }, {
            title: '基准项目',
            dataIndex: 't81_ITEM_NM_C'
          }, {
            title: '申请PL率',
            dataIndex: 't81_APP_RATE',
            sorter: true
          }, {
            title: '计画基准率',
            dataIndex: 't81_PLAN_RATE'
          }, {
            title: '目标基准率',
            dataIndex: 't81_TARGET_RATE'
          }],
          t811columns: [{
            title: '试算项目',
            dataIndex: 't811_CAL_ITEM_NM_C'
          }, {
            title: '原币种',
            dataIndex: 't811_CURR'
          }, {
            title: '费用',
            dataIndex: 't811_PAMT',
            sorter: true
          }, {
            title: '转换汇率',
            dataIndex: 't811_EXG_RATE'
          }, {
            title: '费用(CNY)',
            dataIndex: 't811_TAMT'
          }, {
            title: '比率',
            dataIndex: 't811_APP_RATE'
          }, {
            title: '是否预提',
            dataIndex: 't811_ACCRUED_FLAG_NM'
          }, {
            title: '是否合同列明',
            dataIndex: 't811_CONTRACT_FLAG_NM'
          }, {
            title: '合同未列明预提理由',
            dataIndex: 't811_REMARK'
          }],
          setT81Header: function () {
            return '商品PL'
          },
          setT811Header: function () {
            return 'PL明细项目'
          }
        }
    },
    methods: {
      queryBAppT81 () {
          var _parentThis = this
          if (_parentThis.t8Id === 0) {
            _parentThis.queryParamByOne = {
              biId: _parentThis.biId
            }
            LoadBAppT81LCR(_parentThis.queryParamByOne).then(res => {
              _parentThis.t81List = res.reponse
            })
          } else {
            _parentThis.queryParamByOne1 = {
              biId: _parentThis.biId,
              t8Id: _parentThis.t8Id
            }
            LoadBAppT81(_parentThis.queryParamByOne1).then(res => {
              _parentThis.t81List = res.reponse
            })
          }
      },
      queryBAppT811 () {
          var _parentThis = this
          LoadBAppT811(_parentThis.queryParamByOne2).then(res => {
            _parentThis.t811List = res.reponse
          })
      },
      handleT81ItemClick (t81Id) {
        this.queryParamByOne2 = {
          biId: this.biId,
          t81Id: t81Id
        }
        this.queryBAppT811()
      }
    },
    activated () {
      debugger
      this.queryBAppT81()
    },
    mounted () {
      debugger
      this.queryBAppT81()
    }
}
</script>
<style lang="less">
</style>
