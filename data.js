// data.js
// Toda la información de cadenas, tokens y launchpads vive aquí.
// Para añadir una cadena nueva, añade una entrada a CHAINS.
// El orden de las claves determina el orden en el desplegable.

window.CHAINS = {
  base: {
    name: 'Base',
    icon: '/base-chain.png',
    quote: 'ETH',
    ca: '0xb20000000000000000000063cb5e45a7bcb7c701',
    supply: '1B',
    buys: [
      { name: 'Aerodrome',   icon: '/aerodrome.png', sub: 'Swap on Base',   url: 'https://aerodrome.finance/swap?from=0xb20000000000000000000063cb5e45a7bcb7c701&to=eth&chain0=8453&chain1=8453' },
      { name: 'Uniswap',     icon: '/uniswap.png',   sub: 'Swap on Base',   url: 'https://app.uniswap.org/#/swap?inputCurrency=0xb20000000000000000000063cb5e45a7bcb7c701&outputCurrency=ETH&chain=base' },
      { name: 'o1.exchange', icon: '/o1.png',        sub: 'Launch page',    url: 'https://launch.o1.exchange/token/0xB20000000000000000000063cB5e45a7BCB7c701?swap=sell' },
    ]
  },

  solana: {
    name: 'Solana',
    icon: '/solana.jpg',
    quote: 'SOL',
    ca: 'TJvhqRGcE2oJxQ7U2oKzSfboxZbGAyDR5f2JNpupump',
    supply: '1B',
    buys: [
      { name: 'jup.ag',              icon: '/jupiter.jpg',         sub: 'Swap on Solana',      url: 'https://jup.ag/?sell=So11111111111111111111111111111111111111112&buy=TJvhqRGcE2oJxQ7U2oKzSfboxZbGAyDR5f2JNpupump' },
      { name: 'orca.so',             icon: '/orca.jpg',            sub: 'Liquidity on Solana', url: 'https://www.orca.so/trade?tokenIn=So11111111111111111111111111111111111111112&tokenOut=TJvhqRGcE2oJxQ7U2oKzSfboxZbGAyDR5f2JNpupump' },
      { name: 'trojan.com',          icon: '/trojan.jpg',          sub: 'Track on Solana',     url: 'https://trojan.com/terminal?token=TJvhqRGcE2oJxQ7U2oKzSfboxZbGAyDR5f2JNpupump&pool=FEhheeFDiQ1s1tjJTxfSQwAsQgb33hmGQjLFjGnh8XUo&ref=tensorw' },
      { name: 'pump.fun',            icon: '/pumpfun.jpg',         sub: 'Swap on Solana',      url: 'https://pump.fun/coin/TJvhqRGcE2oJxQ7U2oKzSfboxZbGAyDR5f2JNpupump' },
      { name: 'padre.gg (terminal)', icon: '/tradingterminal.jpg', sub: 'Trade on Solana',     url: 'https://trade.padre.gg/trade/solana/TJvhqRGcE2oJxQ7U2oKzSfboxZbGAyDR5f2JNpupump' },
    ]
  },

  hood: {
    name: 'Robinhood',
    icon: '/robinhood.png',
    quote: 'ETH',
    ca: 'It depends on the dapp',
    supply: '1B',
    buys: [
      { name: 'virtuals.io',     icon: '/virtuals.jpg',   sub: '0x9923bCA0e413C44E81a2F1054Ad7CbAF8B9C843d', url: 'https://app.virtuals.io/virtuals/121616' },
      { name: 'ponsfamily.com',  icon: '/pons.jpg',       sub: '0x18B273B30AC93C837eD4752ADBeC6C9B7c10a681', url: 'https://ponsfamily.com/launchpad/0x18b273b30ac93c837ed4752adbec6c9b7c10a681' },
      { name: 'bow.fun',         icon: '/bowfun.png',     sub: '0x2Ae546B7D278ee105C45C967F1Bb007d3d7acb03', url: 'https://bow.fun/index.html?token=0x2Ae546B7D278ee105C45C967F1Bb007d3d7acb03' },
      { name: 'robinfun.live',   icon: '/robinfun.jpg',   sub: '0xe2c2ce90ced9eeb373b7260078eb1b7bc36c4663', url: 'https://robinfun.live/token/0xe2c2ce90ced9eeb373b7260078eb1b7bc36c4663' },
      { name: 'vlad.fun',        icon: '/vladdotfun.jpg', sub: '0x637b0189223CBEEfC8AEA9Dc3A34fA4244D857f5', url: 'https://www.vlad.fun/coin/0x637b0189223CBEEfC8AEA9Dc3A34fA4244D857f5' },
      { name: 'leavehood.com',   icon: '/leave.jpg',      sub: '0x936128fd2349706e73ef24981476aaf9abc59fda', url: 'https://leavehood.com/token/0x936128fd2349706e73ef24981476aaf9abc59fda' },
      { name: 'recurve.fi',      icon: '/recurve.png',    sub: '0xB72DbaBEe9b3403E43BC79E7E5E73ABa98095A5e', url: 'https://recurve.fi/0xB72DbaBEe9b3403E43BC79E7E5E73ABa98095A5e' },
    ]
  },

  stable: {
    name: 'Stable',
    icon: '/stable.jpg',
    quote: 'gUSDT',
    ca: '0x887c716ab36d5eff78ba438ee89a4deffffdcdc8',
    supply: '1B',
    buys: [
      { name: 'prismapad.fun',    icon: '/prismapad.jpg', sub: 'Launch page',    url: 'https://prismapad.fun/t/0x887c716ab36d5eff78ba438ee89a4deffffdcdc8' },
      { name: 'dyorswap.finance', icon: '/dyorswap.jpg',  sub: 'Swap on Stable', url: 'https://dyorswap.finance/swap/?chainId=988&inputCurrency=GUSDT&outputCurrency=0x887C716ab36D5EfF78ba438EE89a4deffFFDcDC8' },
      { name: 'stable.xyz',       icon: '/stable.jpg',    sub: 'Official swap',  url: 'https://swap.stable.xyz/swap?chain=stable&inputCurrency=0x887C716ab36D5EfF78ba438EE89a4deffFFDcDC8&outputCurrency=0x779Ded0c9e1022225f8E0630b35a9b54bE713736&value=38366.872784492700413237&field=INPUT' },
    ]
  },

  bnb: {
    name: 'BNB Chain',
    icon: '/bnbchain.jpg',
    quote: 'BNB',
    ca: 'It depends on the dapp',
    supply: '1B',
    buys: [
      { name: 'flap.sh',   icon: '/flapdotsh.jpg',    sub: '0xa8903debd1a1e7935fb742323aba4088ebd18888', url: 'https://flap.sh/bnb/0xa8903debd1a1e7935fb742323aba4088ebd18888?lang=en' },
      { name: 'four.meme', icon: '/fourdotmemezh.jpg', sub: '0xb80461f66ff3d2b3112569757a140fd835e84444', url: 'https://four.meme/en/token/0xb80461f66ff3d2b3112569757a140fd835e84444' },
    ]
  },

  arc: {
    name: 'Arc Chain',
    icon: '/arc.jpg',
    quote: 'Arc',
    ca: '0x279FE39F619dD4ad15606b41BdAc4417511599A2',
    supply: '1B',
    buys: [
      { name: 'argus.world', icon: '/argus.jpg', sub: 'Launch page', url: 'https://argus.world/token/0x279FE39F619dD4ad15606b41BdAc4417511599A2' },
    ]
  },

  near: {
    name: 'NEAR',
    icon: '/near.jpg',
    quote: 'NEAR',
    ca: 'pine.nearlytrade.near',
    supply: '1B',
    buys: [
      { name: 'nearly.trade', icon: '/nearly.jpg', sub: 'Swap on NEAR', url: 'https://nearly.trade/pine.nearlytrade.near' },
    ]
  },

  sui: {
    name: 'SUI',
    icon: '/sui.jpg',
    quote: 'USDC',
    ca: '0xf9f056e2af55c53e73c68d40a023bba83436513693854120b3dc5722b76c60a1::pine::PINE',
    supply: '1B',
    buys: [
      { name: 'popularsui.xyz', icon: '/popular.jpg', sub: 'Swap on SUI', url: 'https://popularsui.xyz/token/0xceae43bfeeb093584f29850e768c5d44ccaa160ee6d3ff016972f1f0899959ad' },
    ]
  },

  ronin: {
    name: 'RON',
    icon: '/ronin.jpg',
    quote: 'RONKE',
    ca: '0x402b0a1C100F1dE639451d31C5678d3EFFED1c31',
    supply: '1B',
    buys: [
      { name: 'ronkeverse.fun', icon: '/ronke.jpg', sub: 'Swap on RONKE', url: 'https://ronkeverse.fun/' },
    ]
  },
};
