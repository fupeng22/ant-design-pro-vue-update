<template>
  <a-card :bordered="true">
    <template slot="title">
      <div>
        <a-page-header
          :ghost="false"
          title="Title"
          sub-title="This is a subtitle"
          @back="() => $router.go(-1)"
        >
          <template slot="extra">
            <a-button key="3">
              Operation
            </a-button>
            <a-button key="2">
              Operation
            </a-button>
            <a-button key="1" type="primary">
              Primary
            </a-button>
          </template>
          <a-descriptions size="small" :column="3">
            <a-descriptions-item label="Created">
              Lili Qu
            </a-descriptions-item>
            <a-descriptions-item label="Association">
              <a>421421</a>
            </a-descriptions-item>
            <a-descriptions-item label="Creation Time">
              2017-01-10
            </a-descriptions-item>
            <a-descriptions-item label="Effective Time">
              2017-10-10
            </a-descriptions-item>
            <a-descriptions-item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </a-descriptions-item>
          </a-descriptions>
        </a-page-header>
        <a-row :gutter="1">
          <a-col :lg="4" :md="12" :sm="24">
            <h2>交易决裁新规</h2>
          </a-col>
          <a-col :lg="4" :md="12" :sm="24">
          </a-col>
          <a-col :lg="16" :md="12" :sm="24">
            <a-row :gutter="1">
              <a-col :lg="16" :md="12" :sm="24">
              </a-col>
              <a-col :lg="8" :md="12" :sm="24">
                <a-button type="primary" icon="printer" style="float:right">
                  打印
                </a-button>
              </a-col>
            </a-row>
            <a-row :gutter="1">
              <a-col :lg="3" :md="12" :sm="24">
                <a-icon type="user" />{{ approvalBasicInfo.bI_ApplicantName }}
              </a-col>
              <a-col :lg="7" :md="12" :sm="24">
                <a-icon type="home" />{{ approvalBasicInfo.bI_DeptName }}
              </a-col>
              <a-col :lg="6" :md="12" :sm="24">
                <a-icon type="clock-circle" />{{ approvalBasicInfo.bI_CreateDate }}
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-icon type="tag" />{{ approvalBasicInfo.bI_Code }}
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-icon type="tags" />{{ approvalBasicInfo.bI_AuditState_NM }}
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </template>
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="概要">
        <a-row :gutter="3">
          <a-col :lg="10" :md="12" :sm="24">
            <a-card title="交易背景" :bordered="true" type="inner" >
              <a-textarea
                placeholder=""
                :auto-size="{ minRows: 2 }"
                v-model="approvalBasicInfo.bI_Reason"
              />
            </a-card>
          </a-col>
          <a-col :lg="14" :md="12" :sm="24">
            <a-card :bordered="true" type="inner" >
              <template slot="title">
                客户(付款方)：{{ t11Info.tA_FULL_NAME_C }}
              </template>
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
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="有效性标志">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_VALIDITY_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="有效期始">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_EFF_DATE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="有效期止">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_EXP_DATE"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="业务案例号">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_CASE_NO"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="业务案例名称">
                </a-form-item>
              </a-col>
              <a-col :lg="13" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_CASE_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="交易部门">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_TRANSACTION_ORG_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="交易销售担当">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_TRANSACTION_PIC_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="交易处理担当">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_TRANSACTION_SA_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="买方代码">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input-search
                    enter-button
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_CUSTOMER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="买方">
                </a-form-item>
              </a-col>
              <a-col :lg="13" :md="12" :sm="24">
                <a-form-item>
                  <a-input-search
                    enter-button="调查报告"
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_CUSTOMER_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="最终用户代码">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input-search
                    enter-button
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ENDUSER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="最终用户">
                </a-form-item>
              </a-col>
              <a-col :lg="13" :md="12" :sm="24">
                <a-form-item>
                  <a-input-search
                    enter-button="调查报告"
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ENDUSER_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="付款方代码">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input-search
                    enter-button
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.tA_PAYER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="付款方">
                </a-form-item>
              </a-col>
              <a-col :lg="13" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.tA_FULL_NAME_C"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="销售主协议">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input-search
                    enter-button="预览"
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_AGREEMENT_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="验收附录协议">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input-search
                    enter-button="预览"
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ANNEX_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="默认货物验收天数">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_DAYS_BEF_ACCEPTANCE"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="销售条款">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t111_SELLING_PRICE_TERM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="销售币种">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t111_SELLING_CURR"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="一次性交易">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_ONETIME_TRADE_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="业务途径">
                </a-form-item>
              </a-col>
              <a-col :lg="5" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_BUSINESS_RT_TYPE_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="16" :md="12" :sm="24">
                <a-form-item>
                  <a @click="handleShowSQDialog">销售报价</a>
                </a-form-item>
                <a-modal
                  v-model="visibleSQDialog"
                  title="相关销售报价"
                  :ok-button-props="{ props: { disabled: false } }"
                  :cancel-button-props="{ props: { disabled: false } }"
                  @ok="handleOkSQDialog"
                  @cancel="handleOkSQDialog"
                  :width="1024"
                >
                  <a-table
                    :dataSource="PublicT112GetT112List"
                    :title="setPublicT112GetT112Header"
                    :rowKey="PublicT112GetT112List => PublicT112GetT112List.t1121_ID"
                    :columns="PublicT112GetT112columns"
                    bordered>
                  </a-table>
                </a-modal>
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
              :auto-size="{ minRows: 2 }"
              v-model="approvalBasicInfo.bI_Reason"
            />
          </a-tab-pane>
          <a-tab-pane key="12" tab="回收条款">
            <a-form @submit="handleSubmit" :form="form" class="form">
              <a-row class="form-row" :gutter="16">
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="协议号码">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_AGREEMENT_NO"/>
                  </a-form-item>
                </a-col>
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="协议类型">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_AGREEMENT_TYPE_NM"/>
                  </a-form-item>
                </a-col>
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="协议形式">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_AGREEMENT_FORM_NM"/>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row class="form-row" :gutter="16">
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="协议名称">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_AGREEMENT_NM"/>
                  </a-form-item>
                </a-col>
                <a-col :lg="8" :md="12" :sm="24">
                </a-col>
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="基准外标记">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.tA1_OUT_OF_NORM_NM"/>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row class="form-row" :gutter="16">
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="协议签订必要性描述">
                  </a-form-item>
                </a-col>
                <a-col :lg="21" :md="12" :sm="24">
                  <a-form-item>
                    <a-textarea
                      placeholder=""
                      :auto-size="{ minRows: 2, maxRows: 6 }"
                      v-model="ta1Info.p008_NECESSITY_DESC"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row class="form-row" :gutter="16">
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="联络人">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_CONTACT_NM"/>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row class="form-row" :gutter="16">
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="协议起草日期">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_DRAFT_PDATE"/>
                  </a-form-item>
                </a-col>
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="协议预定签署日期">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_SIGNOFF_PDATE"/>
                  </a-form-item>
                </a-col>
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="协议实际签署日期">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_SIGNOFF_ADATE"/>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row class="form-row" :gutter="16">
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="附加条件信息">
                  </a-form-item>
                </a-col>
                <a-col :lg="21" :md="12" :sm="24">
                  <a-form-item>
                    <a-textarea
                      placeholder=""
                      :auto-size="{ minRows: 2, maxRows: 6 }"
                      v-model="ta1Info.p008_ADDITIONAL_TEXT"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row class="form-row" :gutter="16">
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="有效性标志">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.tA1_VALIDITY_NM"/>
                  </a-form-item>
                </a-col>
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="有效期始">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_EFF_DATE"/>
                  </a-form-item>
                </a-col>
                <a-col :lg="3" :md="12" :sm="24">
                  <a-form-item label="有效期止">
                  </a-form-item>
                </a-col>
                <a-col :lg="5" :md="12" :sm="24">
                  <a-form-item>
                    <a-input
                      placeholder=""
                      v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                      v-model="ta1Info.p008_EXP_DATE"/>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row class="form-row" :gutter="16">
                <a-col :lg="24" :md="12" :sm="24">
                  <a-table :dataSource="ta11List" :rowKey="ta11List => ta11List.tA11_ID" :columns="ta11columns" bordered>
                  </a-table>
                </a-col>
              </a-row>
            </a-form>
          </a-tab-pane>
          <a-tab-pane key="13" tab="采购协议">
            <show-pl></show-pl>
          </a-tab-pane>
          <a-tab-pane key="14" tab="客户授信">
            <a-table :dataSource="PublicTA9List" :title="setPublicTA9Header" :rowKey="PublicTA9List => PublicTA9List.tA9_ID" :columns="PublicTA9columns" bordered>
              <template slot="TA9OneTime" slot-scope="text, record">
                <span v-show="record.tA9_ONETIME_TRADE==1">非一次性</span>
                <span v-show="record.tA9_ONETIME_TRADE==2">一次性</span>
              </template>
              <template slot="TA9" slot-scope="text, record">
                <a @click="handleTA9ItemClick(record.tA9_ID)">授信申请</a>
              </template>
            </a-table>
            <a-table :dataSource="PublicTA91List" :title="setPublicTA91Header" :rowKey="PublicTA91List => PublicTA91List.tA9_ID" :columns="PublicTA91columns" bordered>
            </a-table>
          </a-tab-pane>
          <a-tab-pane key="15" tab="Global Code">
            <a-table :dataSource="bAppT21GCList" :title="setbAppT21GCHeader" :rowKey="bAppT21GCList => bAppT21GCList.t21_ID" :columns="bAppT21GCcolumns" bordered>
              <template slot="globalCode1" slot-scope="text, record">
                <a @click="handlebAppT21GCItemClick(record.t21_ID,record.t21_ENDMAKER_CODE)">Global Code</a>
              </template>
            </a-table>
            <a-table :dataSource="BAppA091BAppT21List1" :title="setBAppA091BAppT21Header" :rowKey="BAppA091BAppT21List1 => BAppA091BAppT21List1.A091_PARTNER_CODE" :columns="BAppA091BAppT21columns1" bordered>
              <template slot="globalCode2" slot-scope="text, record">
                <a @click="handlebAppT21GCItemClick1(record.T21_ID,record.A091_PARTNER_CODE)">Global Code</a>
              </template>
            </a-table>
            <a-table :dataSource="BAppA091BAppT21List2" :title="setBAppA091BAppT21Header" :rowKey="BAppA091BAppT21List2 => BAppA091BAppT21List1.a091_ID" :columns="BAppA091BAppT21columns2" bordered>
            </a-table>
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="3" tab="销售报价明细">
        <a-card type="inner" title="销售报价信息" hoverable="true">
          <a-form @submit="handleSubmit" :form="form" class="form">
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="买方">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t1_CUSTOMER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="18" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t1_FULL_NAME_C"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="下单方">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t111_ORDERER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="18" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t111_ORDERER_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="最终用户">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t112_ENDUSER_CODE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="18" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t112_ENDUSER_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="销售币种">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t111_SELLING_CURR"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="销售价格条款">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t111_SELLING_PRICE_TERM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="付款联系">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="回收条款">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="一次性交易">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t112_ONETIME_TRADE_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="税率代码">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t112_TAX_RATE_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="报价日期">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t112_QUOTATION_DATE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="销售报价单">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="有效期始">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t112_EFF_DATE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="有效期止">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t112_EXP_DATE"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="业务案例">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t0_CASE_NO"/>
                </a-form-item>
              </a-col>
              <a-col :lg="6" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t112Info.t0_CASE_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="24" :md="12" :sm="24">
                <a-table :dataSource="t1121List" :title="setXiaoShouHeader" :rowKey="t1121List => t1121List.t1121_ID" :columns="t1121columns" bordered >
                  <template slot="pgP_RATE">
                    {{ approvalBasicInfo.bI_STDCurr }}
                  </template>
                </a-table>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="24" :md="12" :sm="24">
                <a-table :dataSource="t2121List" :title="setCaiGouHeader" :rowKey="t2121List => t2121List.t2121_ID" :columns="t2121columns" bordered>
                </a-table>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="4" tab="附件">
        <a-table :dataSource="AttachList" :title="setAttachHeader" :rowKey="AttachList => AttachList.awF_ID" :columns="Attachcolumns" bordered>
          <template slot="attachslot" slot-scope="text, record">
            <a @click="handleAttachItemClick(record.awF_ID)">附件</a>
          </template>
        </a-table>
        <a-table :dataSource="AttachDetailList" :title="setAttachDetailHeader" :rowKey="AttachDetailList => AttachDetailList.aD_ID" :columns="AttachDetailcolumns" bordered>
          <template slot="attachDetailslot">
            <a>预览</a><a-divider type="vertical" /><a>下载</a>
          </template>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="5" tab="审批意见">
        <a-table :dataSource="approvalOptionList" :rowKey="approvalOptionList => approvalOptionList.app_ID" :columns="approvalOptioncolumns" bordered>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>
<script>
import { LoadFlowApproveOpinions, LoadBAppT11, LoadApprovalBasicInfo, GetFormViewCRPT, LoadPublicTA1ForTA1, LoadPublicTA11, LoadBAppT113, LoadPublicT112, LoadPublicT1121, LoadPublicT2121, LoadBAppT21GC, LoadBAppA091BAppT21, LoadAttach, LoadAttachDetail, ShowPublicT112GetT112, LoadPublicTA9, LoadPublicTA91 } from '@/api/trade/tradeNew'
import DetailList from '@/components/tools/DetailList'
import ShowPl from '@/components/Trade/ShowPl'
const DetailListItem = DetailList.Item
export default {
    name: 'TradeNew',
    components: {
      DetailList,
      DetailListItem,
      ShowPl
    },
    data () {
        return {
            visibleSQDialog: false,
            queryParamByOne: {
                biId: this.$route.params.biId
            },
            queryParamByOne1: {
                biId: this.$route.params.biId,
                comCode: ''
            },
            queryParamByOne2: {
                biId: this.$route.params.biId,
                t111Id: 0
            },
            queryParamByOne3: {
                biId: this.$route.params.biId,
                t112Id: 0
            },
            queryParamByOne4: {
                biId: this.$route.params.biId,
                t21Id: 0,
                partnerCode: ''
            },
            queryParamByOne5: {
                biId: this.$route.params.biId,
                awfId: 0
            },
            queryParamByOne6: {
                t11Id: 0,
                comCode: ''
            },
            queryParamByOne7: {
                biId: 0,
                payerCode: ''
            },
            queryParamByOne8: {
                biId: 0,
                ta9Id: 0
            },
            t11Info: {
            },
            ta1Info: {
            },
            ta11List: {
            },
            t113Info: [],
            t112Info: {
            },
            t1121List: [],
            t2121List: [],
            bAppT21GCList: [],
            BAppA091BAppT21List1: [],
            BAppA091BAppT21List2: [],
            AttachList: [],
            AttachDetailList: [],
            PublicT112GetT112List: [],
            PublicTA9List: [],
            PublicTA91List: [],
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
            }],
            ta11columns: [{
              title: '支付比例%',
              dataIndex: 'tA11_TRANSFER_RATIO'
            }, {
              title: '支付业务类型',
              dataIndex: 'tA11_TRANSFER_TYPE'
            }, {
              title: '支付起算日类型',
              dataIndex: 'tA11_BASELINE_TYPE',
              sorter: true
            }, {
              title: '支付日计算方式',
              dataIndex: 'tA11_METHOD_OF_DUEON'
            }, {
              title: '支付方式',
              dataIndex: 'tA11_PAYMENT_METHOD'
            }, {
              title: '支付条件',
              dataIndex: 'tA11_PAYMENT_CODE'
            }, {
              title: '转账天数',
              dataIndex: 'tA11_DAYS_OF_TRANSFER'
            }, {
              title: '兑现天数',
              dataIndex: 'tA11_DAYS_OF_ENCASH'
            }],
            t2121columns: [{
              title: '松下品号',
              dataIndex: 't2121_CODE'
            }, {
              title: '采购数量',
              dataIndex: 't2121_QUOTE_QTY'
            }, {
              title: '采购币种',
              dataIndex: 't211_BUYING_CURR',
              sorter: true
            }, {
              title: '税前金额(原币)',
              dataIndex: 't2121_PPRICE_OF_UNI'
            }, {
              title: '税后金额(原币)',
              dataIndex: 't2121_TPRICE_OF_UNI'
            }, {
              title: '供应商',
              dataIndex: 't2_FULL_NAME_C',
              ellipsis: true
            }],
            t1121columns: [{
              title: '销售币种',
              dataIndex: 't1121_S_CURR'
            }, {
              title: '税前总额(原币)',
              dataIndex: 't1121_PPRICE_OF_UNI_Total'
            }, {
              title: '税后总额(原币)',
              dataIndex: 't1121_TPRICE_OF_UNI_Total',
              sorter: true
            }, {
              title: '总值差',
              dataIndex: 'pgP_RATE'
            }, {
              title: '本位币',
              dataIndex: 'pgP_RATE',
              scopedSlots: { customRender: 'pgP_RATE' }
            }, {
              title: '税前总额(本位币)',
              dataIndex: 't1121_S_PPRICE_OF_UNI_total'
            }, {
              title: '税后总额(本位币)',
              dataIndex: 't1121_S_TPRICE_OF_UNI_total'
            }],
            bAppT21GCcolumns: [{
              title: '',
              dataIndex: 't21_ID',
              scopedSlots: { customRender: 'globalCode1' }
            }, {
              title: '工厂',
              dataIndex: 't21_ENDMAKER_FULL_NAME_C',
              ellipsis: true
            }, {
              title: '采购协议名称',
              dataIndex: 't21_AGREEMENT_NM'
            }],
            BAppA091BAppT21columns1: [{
              title: '伙伴代码',
              dataIndex: 'A091_PARTNER_CODE',
              scopedSlots: { customRender: 'globalCode2' }
            }, {
              title: '全称(中/英文)',
              dataIndex: 'P000_FULL_NAME_C',
              ellipsis: true
            }, {
              title: '全称(英文)',
              dataIndex: 'P000_FULL_NAME_F',
              ellipsis: true
            }, {
              title: '简称',
              dataIndex: 'A091_GLOBAL_ENG_AB'
            }, {
              title: 'G.C 指定',
              dataIndex: 'status'
            }],
            BAppA091BAppT21columns2: [{
              title: '伙伴类型',
              dataIndex: 'a091_PARTNER_TYPE_NM'
            }, {
              title: 'GC代码',
              dataIndex: 'a091_GLOBAL_CODE'
            }, {
              title: '全称',
              dataIndex: 'a091_GLOBAL_ENG_NM',
              ellipsis: true
            }, {
              title: '简称',
              dataIndex: 'a091_GLOBAL_ENG_AB'
            }, {
              title: '所在地址',
              dataIndex: 'a091_GLOBAL_ENG_ADR',
              ellipsis: true
            }, {
              title: '电话号码',
              dataIndex: 'a091_GLOBAL_TEL_NO',
              ellipsis: true
            }, {
              title: '传真号码',
              dataIndex: 'a091_GLOBAL_FAX_NO',
              ellipsis: true
            }, {
              title: 'Control Divion',
              dataIndex: 'a091_GLOBAL_FAX_NO'
            }],
            Attachcolumns: [{
              title: '类型描述',
              dataIndex: 'awF_Description'
            }, {
              title: '',
              dataIndex: 'awF_ID',
              scopedSlots: { customRender: 'attachslot' }
            }],
            AttachDetailcolumns: [{
              title: '文件名称',
              dataIndex: 'aD_FileName'
            }, {
              title: '',
              dataIndex: 'aD_FileName',
              scopedSlots: { customRender: 'attachDetailslot' }
            }],
            PublicTA9columns: [{
              title: '',
              dataIndex: 'tA9_ONETIME_TRADE',
              scopedSlots: { customRender: 'TA9OneTime' }
            }, {
              title: '',
              dataIndex: 'tA9_ID',
              scopedSlots: { customRender: 'TA9' }
            }, {
              title: '交易部门',
              dataIndex: 'tA9_TRANSACTION_ORG_CODE'
            }, {
              title: '付款方',
              dataIndex: 'fulL_NAME_C'
            }, {
              title: '当前申请额度',
              dataIndex: 'tA9_APP_STD_VAL'
            }, {
              title: '已申请额度(CNY)',
              dataIndex: 'tA9_APP_STD_VAL_TBA'
            }],
            PublicTA91columns: [{
              title: '',
              dataIndex: 'tA91_ID'
            }, {
              title: '申请单号',
              dataIndex: 'tA91_BI_CODE'
            }, {
              title: '上回额度(CNY)',
              dataIndex: 'tA91_BEF_APP_STD_VAL'
            }, {
              title: '本回额度(CNY)',
              dataIndex: 'tA91_AFT_APP_STD_VAL'
            }, {
              title: '本回变化(CNY)',
              dataIndex: 'tA91_DLT_APP_STD_VAL'
            }, {
              title: '有效期始',
              dataIndex: 'tA91_EFF_DATE'
            }, {
              title: '有效期止',
              dataIndex: 'tA91_EXP_DATE'
            }, {
              title: '授信池全体额度(CNY)',
              dataIndex: 'tA91_CREDIT_STD_TOT_VAL'
            }, {
              title: '授信池已授额度(CNY)',
              dataIndex: 'tA91_CREDIT_STD_APP_VAL'
            }, {
              title: '保全需要标记',
              dataIndex: 'tA91_GUARANTEE_YN_NM'
            }, {
              title: '客户同意保全',
              dataIndex: 'tA91_CUSTOMER_GUARANTEE_NM'
            }],
            PublicT112GetT112columns: [{
              title: '销售报价单号',
              dataIndex: 't0_CASE_NO'
            }, {
              title: '销售条款',
              dataIndex: 't111_SELLING_PRICE_TERM'
            }, {
              title: '销售单位',
              dataIndex: 't1121_PRICING_UNI_NM'
            }, {
              title: '销售单位数量',
              dataIndex: 't1121_PRICING_QTY'
            }, {
              title: '销售数量',
              dataIndex: 't1121_QUOTE_QTY'
            }, {
              title: '原销售币种',
              dataIndex: 't1121_S_CURR'
            }, {
              title: '税前销售价格',
              dataIndex: 't1121_PPRICE_OF_UNI'
            }, {
              title: '原采购币种',
              dataIndex: 't1121_B_CURR'
            }, {
              title: '原税前采购价格',
              dataIndex: 't1121_B_PPRICE_OF_UNI'
            }],
            setXiaoShouHeader: function () {
              return '销售明细'
            },
            setCaiGouHeader: function () {
              return '采购明细'
            },
            setbAppT21GCHeader: function () {
              return '采购协议'
            },
            setBAppA091BAppT21Header: function () {
              return 'Global Code'
            },
            setAttachHeader: function () {
              return '附件类型'
            },
            setAttachDetailHeader: function () {
              return '附件'
            },
            setPublicT112GetT112Header: function () {
              return '销售报价'
            },
            setPublicTA9Header: function () {
              return '授信申请(TA9)'
            },
            setPublicTA91Header: function () {
              return '授信申请(TA91)'
            }
        }
    },
    methods: {
        queryFlowApproveOpinions () {
            var _parentThis = this
            LoadFlowApproveOpinions(this.queryParamByOne).then(res => {
                _parentThis.approvalOptionList = res.reponse
            })
        },
        queryPublicTA11 () {
            var _parentThis = this
            LoadPublicTA11(this.queryParamByOne).then(res => {
                _parentThis.ta11List = res.reponse
            })
        },
        queryBApp_T11 () {
            var _parentThis = this
            LoadBAppT11(this.queryParamByOne).then(res => {
                _parentThis.t11Info = res.reponse[0]

                _parentThis.queryParamByOne2 = {
                  biId: _parentThis.$route.params.biId,
                  t111Id: _parentThis.t11Info.t11_T111_ID
                }
                _parentThis.queryPublicTA1ForTA1()

                _parentThis.queryParamByOne7 = {
                  biId: _parentThis.$route.params.biId,
                  payerCode: _parentThis.t11Info.tA_PAYER_CODE
                }
                _parentThis.queryPublicTA9()
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
        },
        queryPublicTA1ForTA1 () {
          var _parentThis = this
            LoadPublicTA1ForTA1(this.queryParamByOne2).then(res => {
                _parentThis.ta1Info = res.reponse[0]
            })
        },
        queryBAppT113 () {
          var _parentThis = this
            LoadBAppT113(this.queryParamByOne).then(res => {
                _parentThis.t113Info = res.reponse

                if (_parentThis.t113Info.length > 0) {
                  _parentThis.queryParamByOne3 = {
                    biId: _parentThis.$route.params.biId,
                    t112Id: _parentThis.t113Info[0].t113_T112_ID
                  }

                  _parentThis.queryPublicT112()
                  _parentThis.queryPublicT1121()
                  _parentThis.queryPublicT2121()
                } else {
                  _parentThis.t112Info = []
                  _parentThis.t1121List = []
                  _parentThis.t2121List = []
                }
            })
        },
        queryPublicT112 () {
          var _parentThis = this
            LoadPublicT112(this.queryParamByOne3).then(res => {
                _parentThis.t112Info = res.reponse[0]
            })
        },
        queryPublicT1121 () {
          var _parentThis = this
            LoadPublicT1121(this.queryParamByOne3).then(res => {
                _parentThis.t1121List = res.reponse
            })
        },
        queryPublicT2121 () {
          var _parentThis = this
            LoadPublicT2121(this.queryParamByOne3).then(res => {
                _parentThis.t2121List = res.reponse
            })
        },
        queryBAppT21GC () {
          var _parentThis = this
            LoadBAppT21GC(this.queryParamByOne).then(res => {
                _parentThis.bAppT21GCList = res.reponse
            })
        },
        queryBAppA091BAppT21 () {
          var _parentThis = this
            LoadBAppA091BAppT21(this.queryParamByOne4).then(res => {
                var tmpBAppA091BAppT21List1 = res.reponse
                var A091Grid = []
                for (var j = 0; j < tmpBAppA091BAppT21List1.length; j++) {
                  var item = tmpBAppA091BAppT21List1[j]
                  var num = 0
                  for (var i = 0; i < A091Grid.length; i++) {
                      if (A091Grid[i].A091_PARTNER_CODE === item.a091_PARTNER_CODE) {
                          num++
                          break
                      }
                  }
                  if (num === 0) {
                      var entity = {
                          A091_PARTNER_CODE: item.a091_PARTNER_CODE,
                          A091_GLOBAL_CODE: item.a091_GLOBAL_CODE,
                          A091_COMP_CODE: item.a091_COMP_CODE,
                          A091_GLOBAL_ENG_NM: item.a091_GLOBAL_ENG_NM,
                          A091_GLOBAL_ENG_AB: item.a091_GLOBAL_ENG_AB,
                          A091_GLOBAL_ENG_ADR: item.a091_GLOBAL_ENG_ADR,
                          A091_GLOBAL_TEL_NO: item.a091_GLOBAL_TEL_NO,
                          A091_GLOBAL_FAX_NO: item.a091_GLOBAL_FAX_NO,
                          P000_FULL_NAME_C: item.p000_FULL_NAME_C,
                          P000_FULL_NAME_F: item.p000_FULL_NAME_F,
                          P000_ABBR_NAME: item.p000_ABBR_NAME,
                          A091_ISNEWADD: item.a091_ISNEWADD,
                          T21_ID: this.queryParamByOne4.t21Id
                      }
                      A091Grid.push(entity)
                  }
                }

                for (var k = 0; k < A091Grid.length; k++) {
                  var item1 = A091Grid[k]
                  var b = 0
                  var a = 0
                  for (var m = 0; m < res.reponse.length; m++) {
                      if (res.reponse[m].a091_PARTNER_CODE === item1.A091_PARTNER_CODE) {
                          b++
                          if (res.reponse[m].a091_GLOBAL_CODE.length > 0 || res.reponse[m].a091_ISNEWADD === 3 || res.reponse[m].a091_ISNEWADD === 7) {
                              a++
                          }
                      }
                  }
                  A091Grid[k].status = a + '/' + b
                }
                _parentThis.BAppA091BAppT21List1 = A091Grid
            })
        },
        queryBAppA091BAppT21detail () {
          var _parentThis = this
            LoadBAppA091BAppT21(this.queryParamByOne4).then(res => {
              _parentThis.BAppA091BAppT21List2 = res.reponse
            })
        },
        handlebAppT21GCItemClick (t21Id, endmakerCode) {
          var _parentThis = this
          _parentThis.queryParamByOne4 = {
              biId: this.$route.params.biId,
              t21Id: t21Id,
              partnerCode: ''
          }
          _parentThis.queryBAppA091BAppT21()

          _parentThis.BAppA091BAppT21List2 = []
        },
        handlebAppT21GCItemClick1 (t21Id, endmakerCode) {
          var _parentThis = this
          _parentThis.queryParamByOne4 = {
              biId: this.$route.params.biId,
              t21Id: t21Id,
              partnerCode: endmakerCode
          }
          debugger
          _parentThis.queryBAppA091BAppT21detail()
        },
        queryAttach () {
          var _parentThis = this
            LoadAttach(this.queryParamByOne).then(res => {
              _parentThis.AttachList = res.reponse
            })
        },
        queryAttachDetail () {
          var _parentThis = this
            LoadAttachDetail(this.queryParamByOne5).then(res => {
              _parentThis.AttachDetailList = res.reponse
            })
        },
        queryPublicT112GetT112 () {
          var _parentThis = this
            ShowPublicT112GetT112(this.queryParamByOne6).then(res => {
              _parentThis.PublicT112GetT112List = res.reponse
            })
        },
        handleAttachItemClick (awfId) {
          var _parentThis = this
          _parentThis.queryParamByOne5 = {
              biId: this.$route.params.biId,
              awfId: awfId
          }
          _parentThis.queryAttachDetail()
        },
        handleShowSQDialog () {
          this.queryParamByOne6 = {
            t11Id: this.t11Info.t11_ID,
            comCode: this.approvalBasicInfo.bI_CompanyCode
          }
          this.queryPublicT112GetT112()
          this.visibleSQDialog = true
        },
        handleOkSQDialog () {
          this.visibleSQDialog = false
        },
        queryPublicTA9 () {
          var _parentThis = this
            LoadPublicTA9(this.queryParamByOne7).then(res => {
              _parentThis.PublicTA9List = res.reponse
            })
        },
        queryPublicTA91 () {
          var _parentThis = this
            LoadPublicTA91(this.queryParamByOne8).then(res => {
              _parentThis.PublicTA91List = res.reponse
            })
        },
        handleTA9ItemClick (ta9Id) {
          this.queryParamByOne8 = {
            biId: this.approvalBasicInfo.bI_ID,
            ta9Id: ta9Id
          }
          this.queryPublicTA91()
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
      this.queryPublicTA11()
      this.queryBAppT113()
      this.queryBAppT21GC()
      this.queryAttach()
    }
}
</script>
<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
</style>
