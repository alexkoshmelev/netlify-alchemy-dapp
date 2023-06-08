export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const vestingDataUrl = `${baseUrl}/vesting/getData`

export const stakingDataUrl = `${baseUrl}/staking/getData`

export const getStakingDataRoute = '/api/staking/route'

export const getVestingDataRoute = '/api/vesting/route'

// defaultChainId
export const defaultChainIdTest = 80001
export const defaultChainIdMain = 56
export const defaultChainId = defaultChainIdTest

// defaultChainName
export const defaultChainNameTest = 'Mumbai'
export const defaultChainNameMain = 'BNB Smart Chain'
export const defaultChainName = defaultChainNameTest

// egoTokenContractAddress
export const egoTokenContractAddressTest = '0x4143fD4A642D7B9B4E418dD1ab60f52F8627F44f'
export const egoTokenContractAddressMain = '0x44a21B3577924DCD2e9C81A3347D204C36a55466'
export const egoTokenContractAddress = egoTokenContractAddressTest
