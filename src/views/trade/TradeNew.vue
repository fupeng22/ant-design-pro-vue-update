<template>
  <a-card :bordered="true">
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="概要">
        <a-row :gutter="3">
          <a-col :span="10">
            <a-card title="交易背景" :bordered="true" type="inner" >
              <span v-html="approvalBasicInfo.bI_Reason"></span>
            </a-card>
          </a-col>
          <a-col :span="14">
            <a-card title="客户(付款方):" :bordered="true" type="inner" >
              <p>card content</p>
            </a-card>
          </a-col>
        </a-row>
        <a-card type="inner" title="供应商">
          <detail-list title="" size="small" :col="2" v-for="item of vendorInfo" :key="item.id">
            <detail-list-item term=""><span v-html="item.vender_Name"></span></detail-list-item>
            <detail-list-item term=""><span v-html="item.vender_SellingAgreement"></span></detail-list-item>
            <detail-list-item term=""><span v-html="item.payer_Condition"></span></detail-list-item>
            <detail-list-item term=""><span v-html="item.productsInfo"></span></detail-list-item>
          </detail-list>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="2" tab="基本信息">
        <a-card type="inner" title="基本信息" hoverable="true">
          <a-form @submit="handleSubmit" :form="form" class="form">
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="有效性标志">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ENDUSER_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="有效期始">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_EFF_DATE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="有效期止">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_EXP_DATE"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="业务案例号">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_CASE_NO"/>
                </a-form-item>
              </a-col>
              <a-col :lg="16" :md="12" :sm="24">
                <a-form-item label="业务案例名称">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_CASE_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="交易部门">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_TRANSACTION_ORG_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="交易销售担当">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_TRANSACTION_PIC_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="交易处理担当">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_TRANSACTION_SA_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="买方代码">
                  <a-input-search
                    enter-button
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_CUSTOMER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="16" :md="12" :sm="24">
                <a-form-item label="买方">
                  <a-input-search
                    enter-button="调查报告"
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_CUSTOMER_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="最终用户代码">
                  <a-input-search
                    enter-button
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ENDUSER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="16" :md="12" :sm="24">
                <a-form-item label="最终用户">
                  <a-input-search
                    enter-button="调查报告"
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ENDUSER_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="付款方代码">
                  <a-input-search
                    enter-button
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.tA_PAYER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="16" :md="12" :sm="24">
                <a-form-item label="付款方">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.tA_FULL_NAME_C"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="销售主协议">
                  <a-input-search
                    enter-button="预览"
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_AGREEMENT_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="验收附录协议">
                  <a-input-search
                    enter-button="预览"
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ANNEX_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="默认货物验收天数">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_DAYS_BEF_ACCEPTANCE"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="销售条款">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t111_SELLING_PRICE_TERM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="销售币种">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t111_SELLING_CURR"/>
                </a-form-item>
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="一次性交易">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ONETIME_TRADE_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="8" :md="12" :sm="24">
                <a-form-item label="业务途径">
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_BUSINESS_RT_TYPE_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item v-if="showSubmit">
              <a-button htmlType="submit" >Submit</a-button>
            </a-form-item>
          </a-form>
        </a-card>
        <a-tabs type="card" @change="callback">
          <a-tab-pane key="11" tab="理由说明">
            <a-textarea
              placeholder=""
              :auto-size="{ minRows: 2, maxRows: 6 }"
              v-model="approvalBasicInfo.bI_Reason"
            />
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
import { LoadFlowApproveOpinions, LoadBAppT11, LoadApprovalBasicInfo, GetFormViewCRPT } from '@/api/trade/tradeNew'
import DetailList from '@/components/tools/DetailList'
const DetailListItem = DetailList.Item
export default {
    name: 'TradeNew',
    components: {
      DetailList,
      DetailListItem
    },
    data () {
        return {
            queryParamByOne: {
                biId: this.$route.params.biId
            },
            queryParamByOne1: {
                biId: this.$route.params.biId,
                comCode: ''
            },
            t11Info: {
            },
            approvalBasicInfo: {
            },
            vendorInfo: [],
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
            var _parentThis = this
            LoadFlowApproveOpinions(this.queryParamByOne).then(res => {
                _parentThis.approvalOptionList = res.reponse
            })
        },
        queryBApp_T11 () {
            var _parentThis = this
            LoadBAppT11(this.queryParamByOne).then(res => {
                _parentThis.t11Info = res.reponse[0]
            })
        },
        queryApprovalBasicInfo () {
            var _parentThis = this
            LoadApprovalBasicInfo(this.queryParamByOne).then(res => {
                _parentThis.approvalBasicInfo = res.reponse[0]
                _parentThis.queryParamByOne1 = {
                  biId: _parentThis.$route.params.biId,
                  comCode: _parentThis.approvalBasicInfo.bI_CompanyCode
                }
                _parentThis.queryFormViewCRPT()
            })
        },
        queryFormViewCRPT () {
            var _parentThis = this
            GetFormViewCRPT(this.queryParamByOne1).then(res => {
                _parentThis.vendorInfo = res.reponse
            })
        }
    },
    activated () {
      debugger
      this.queryParamByOne = {
        biId: this.$route.params.biId
      }
      this.queryFlowApproveOpinions()
      this.queryBApp_T11()
      this.queryApprovalBasicInfo()
    }
}
</script>
<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
</style>
