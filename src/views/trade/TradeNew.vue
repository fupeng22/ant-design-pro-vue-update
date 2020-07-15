<template>
  <a-card :bordered="true">
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="概要">
        <a-row :gutter="3">
          <a-col :span="10">
            <a-card title="交易背景" :bordered="true" type="inner" >
              <span v-text="approvalBasicInfo.bI_Reason"></span>
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
                    v-model="t11Info.t11_VALIDITY_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="18" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_EFF_DATE"/>
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
                    v-model="t11Info.t11_VALIDITY_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="18" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_EFF_DATE"/>
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
                    v-model="t11Info.t11_VALIDITY_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="18" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t11_EFF_DATE"/>
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
                    v-model="t11Info.t0_CASE_NO"/>
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
                    v-model="t11Info.t0_CASE_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="付款联系">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_CASE_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="回收条款">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
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
                <a-form-item label="一次性交易">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_CASE_NO"/>
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
                    v-model="t11Info.t0_CASE_NM"/>
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
                    v-model="t11Info.t0_CASE_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item label="销售报价单">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
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
                <a-form-item label="有效期始">
                </a-form-item>
              </a-col>
              <a-col :lg="3" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_CASE_NO"/>
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
                    v-model="t11Info.t0_CASE_NM"/>
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
                    v-model="t11Info.t0_CASE_NM"/>
                </a-form-item>
              </a-col>
              <a-col :lg="6" :md="12" :sm="24">
                <a-form-item>
                  <a-input
                    placeholder=""
                    v-decorator="['name',{rules: [{ required: true, message: '', whitespace: true}]}]"
                    v-model="t11Info.t0_CASE_NM"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item v-if="showSubmit">
              <a-button htmlType="submit" >Submit</a-button>
            </a-form-item>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="24" :md="12" :sm="24">
                <a-table :dataSource="ta11List" :title="setXiaoShouHeader" :rowKey="ta11List => ta11List.tA11_ID" :columns="ta11columns" bordered>
                </a-table>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="24" :md="12" :sm="24">
                <a-table :dataSource="ta11List" :title="setCaiGouHeader" :rowKey="ta11List => ta11List.tA11_ID" :columns="ta11columns" bordered>
                </a-table>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
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
import { LoadFlowApproveOpinions, LoadBAppT11, LoadApprovalBasicInfo, GetFormViewCRPT, LoadPublicTA1ForTA1, LoadPublicTA11 } from '@/api/trade/tradeNew'
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
            queryParamByOne2: {
                biId: this.$route.params.biId,
                t111Id: 0
            },
            t11Info: {
            },
            ta1Info: {
            },
            ta11List: {
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
            setXiaoShouHeader: function () {
              return '销售明细'
            },
            setCaiGouHeader: function () {
              return '采购明细'
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
    }
}
</script>
<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
</style>
