export const generateTransaction = account => ({
  actions: [{
    account: 'tropicaltown',
    name: 'like',
    authorization: [{
      actor: account,
      permission: 'active',
    }],
    data: {
      user: account,
    },
  }],
})

export const transactionConfig = { broadcast: true, expireSeconds: 300 }
