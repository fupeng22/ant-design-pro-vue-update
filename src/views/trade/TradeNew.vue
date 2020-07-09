<template>
  <a-card :bordered="true">
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="概要">
        888
      </a-tab-pane>
      <a-tab-pane key="2" tab="基本信息">
        <a-form @submit="handleSubmit" :form="form" class="form">
          <a-row class="form-row" :gutter="16">
            <a-col :lg="6" :md="12" :sm="24">
              <a-form-item label="仓库名">
                <a-input
                  placeholder="请输入仓库名称"
                  v-decorator="['name',{rules: [{ required: true, message: '请输入仓库名称', whitespace: true}]}]" />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
              <a-form-item
                label="仓库域名">
                <a-input
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="请输入"
                  v-decorator="[
                    'url',
                    {rules: [{ required: true, message: '请输入仓库域名', whitespace: true}, {validator: validate}]}
                  ]" />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
              <a-form-item
                label="仓库管理员">
                <a-select placeholder="请选择管理员" v-decorator="[ 'owner', {rules: [{ required: true, message: '请选择管理员'}]} ]">
                  <a-select-option value="王同学">王同学</a-select-option>
                  <a-select-option value="李同学">李同学</a-select-option>
                  <a-select-option value="黄同学">黄同学</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row class="form-row" :gutter="16">
            <a-col :lg="6" :md="12" :sm="24">
              <a-form-item
                label="审批人">
                <a-select placeholder="请选择审批员" v-decorator="[ 'approver', {rules: [{ required: true, message: '请选择审批员'}]} ]">
                  <a-select-option value="王晓丽">王晓丽</a-select-option>
                  <a-select-option value="李军">李军</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
              <a-form-item
                label="生效日期">
                <a-range-picker
                  style="width: 100%"
                  v-decorator="[
                    'dateRange',
                    {rules: [{ required: true, message: '请选择生效日期'}]}
                  ]" />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
              <a-form-item
                label="仓库类型">
                <a-select
                  placeholder="请选择仓库类型"
                  v-decorator="[
                    'type',
                    {rules: [{ required: true, message: '请选择仓库类型'}]}
                  ]" >
                  <a-select-option value="公开">公开</a-select-option>
                  <a-select-option value="私密">私密</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item v-if="showSubmit">
            <a-button htmlType="submit" >Submit</a-button>
          </a-form-item>
        </a-form>
        <a-tabs type="card" @change="callback">
          <a-tab-pane key="11" tab="理由说明">
            等得到
          </a-tab-pane>
          <a-tab-pane key="12" tab="回收条款">
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane key="13" tab="采购协议">
            Content of Tab Pane 3
          </a-tab-pane>
          <a-tab-pane key="14" tab="客户授信">
            Content of Tab Pane 3
          </a-tab-pane>
          <a-tab-pane key="15" tab="Global Code">
            Content of Tab Pane 3
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="3" tab="销售报价明细">
        Content of Tab Pane 3
      </a-tab-pane>
      <a-tab-pane key="4" tab="附件">
        Content of Tab Pane 3
      </a-tab-pane>
      <a-tab-pane key="5" tab="审批意见">
        <a-table :dataSource="approvalOptionList" :rowKey="approvalOptionList => approvalOptionList.app_ID" :columns="approvalOptioncolumns" bordered>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>
<script>
import { LoadFlowApproveOpinions } from '@/api/trade/tradeNew'
export default {
    name: 'TradeNew',
    data () {
        return {
            queryParamByOne: {
                biId: 620128
            },
            approvalOptionList: [],
            approvalOptioncolumns: [{
              title: '步骤',
              dataIndex: 'app_StepName'
            }, {
              title: '审批者',
              dataIndex: 'app_UserName'
            }, {
              title: '审批时间',
              dataIndex: 'app_Date',
              sorter: true
            }, {
              title: '审批状态',
              dataIndex: 'app_Remark'
            }, {
              title: '审批意见',
              dataIndex: 'app_Opinion'
            }]
        }
    },
    methods: {
        queryFlowApproveOpinions () {
            LoadFlowApproveOpinions(this.queryParamByOne).then(res => {
                this.approvalOptionList = res.reponse
            })
        }
    },
    activated () {
      this.queryFlowApproveOpinions()
    }
}
</script>
<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
</style>
