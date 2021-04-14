cube(`Dbl`, {
  sql: `SELECT * FROM myes."dbl-2021-04-12"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    itemid: {
      sql: `itemid`,
      type: `number`
    },
    ns: {
      sql: `ns`,
      type: `number`
    },
    value:{
      sql: `value`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
