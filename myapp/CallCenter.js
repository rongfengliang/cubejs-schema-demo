module.exports = {
  sql: ()=> `SELECT * FROM sf100000.call_center`,
  joins: {
    
  },

  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    ccCallCenterId: {
      sql: ()=>`cc_call_center_id`,
      type: `string`
    },
    
    ccName: {
      sql: ()=>`cc_name`,
      type: `string`
    },
    
    ccClass: {
      sql: ()=>`cc_class`,
      type: `string`
    },
    
    ccHours: {
      sql: ()=>`cc_hours`,
      type: `string`
    },
    
    ccManager: {
      sql: ()=>`cc_manager`,
      type: `string`
    },
    
    ccMktClass: {
      sql: ()=>`cc_mkt_class`,
      type: `string`
    },
    
    ccMktDesc: {
      sql: ()=>`cc_mkt_desc`,
      type: `string`
    },
    
    ccMarketManager: {
      sql: ()=>`cc_market_manager`,
      type: `string`
    },
    
    ccDivisionName: {
      sql: ()=>`cc_division_name`,
      type: `string`
    },
    
    ccCompanyName: {
      sql: ()=>`cc_company_name`,
      type: `string`
    },
    
    ccStreetNumber: {
      sql: ()=>`cc_street_number`,
      type: `string`
    },
    
    ccStreetName: {
      sql: ()=>`cc_street_name`,
      type: `string`
    },
    
    ccStreetType: {
      sql: ()=>`cc_street_type`,
      type: `string`
    },
    
    ccSuiteNumber: {
      sql: ()=>`cc_suite_number`,
      type: `string`
    },
    
    ccCity: {
      sql: ()=>`cc_city`,
      type: `string`
    },
    
    ccCounty: {
      sql: ()=>`cc_county`,
      type: `string`
    },
    
    ccState: {
      sql: ()=>`cc_state`,
      type: `string`
    },
    
    ccZip: {
      sql: ()=>`cc_zip`,
      type: `string`
    },
    
    ccCountry: {
      sql: ()=>`cc_country`,
      type: `string`
    },
    
    ccRecStartDate: {
      sql: ()=>`cc_rec_start_date`,
      type: `time`
    },
    
    ccRecEndDate: {
      sql: ()=>`cc_rec_end_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
};
