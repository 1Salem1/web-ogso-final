export interface Product {
  family: string;
  category: string;
  name: string;
  size: number;
  max_height: number;
  min_height: number;
  max_weight: number,
  min_weight: number;
  ski_level: [];
  playground: [];
  ski_style: [];
  riding_speed: string;

}
export interface Prediction {
  prediction : number;
  name : string;
  size : number;
}

export const products = [
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80',
    size: 164,
    max_height: 174,
    min_height: 164,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80',
    size: 172,
    max_height: 182,
    min_height: 172,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80',
    size: 180,
    max_height: 190,
    min_height: 180,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80',
    size: 188,
    max_height: 999,
    min_height: 188,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  },


  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90',
    size: 160,
    max_height: 170,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90',
    size: 168,
    max_height: 178,
    min_height: 168,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90',
    size: 176,
    max_height: 186,
    min_height: 176,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90',
    size: 184,
    max_height: 194,
    min_height: 184,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90',
    size: 192,
    max_height: 999,
    min_height: 192,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  },


  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100',
    size: 162,
    max_height: 172,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100',
    size: 170,
    max_height: 180,
    min_height: 170,
    max_weight: 67,
    min_weight: 55,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100',
    size: 178,
    max_height: 188,
    min_height: 178,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100',
    size: 186,
    max_height: 196,
    min_height: 186,
    max_weight: 94,
    min_weight: 82,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100',
    size: 194,
    max_height: 999,
    min_height: 194,
    max_weight: 999,
    min_weight: 94,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  ,

  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110",
    size: 171,
    max_height: 181,
    min_height: 0,
    max_weight: 60,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110",
    size: 179,
    max_height: 189,
    min_height: 179,
    max_weight: 75,
    min_weight: 60,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110",
    size: 187,
    max_height: 197,
    min_height: 187,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }



  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "CORBET'S 110",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80',
    size: 164,
    max_height: 174,
    min_height: 164,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80',
    size: 172,
    max_height: 182,
    min_height: 172,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80',
    size: 180,
    max_height: 190,
    min_height: 180,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80',
    size: 188,
    max_height: 999,
    min_height: 188,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,

  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90',
    size: 160,
    max_height: 170,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90',
    size: 168,
    max_height: 178,
    min_height: 168,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90',
    size: 176,
    max_height: 186,
    min_height: 176,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90',
    size: 184,
    max_height: 194,
    min_height: 184,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90',
    size: 192,
    max_height: 999,
    min_height: 192,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow'

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100',
    size: 162,
    max_height: 172,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow'

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100',
    size: 170,
    max_height: 180,
    min_height: 170,
    max_weight: 67,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100',
    size: 178,
    max_height: 188,
    min_height: 178,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100',
    size: 186,
    max_height: 196,
    min_height: 186,
    max_weight: 94,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100',
    size: 194,
    max_height: 999,
    min_height: 194,
    max_weight: 999,
    min_weight: 94,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENCER 110",
    size: 171,
    max_height: 181,
    min_height: 0,
    max_weight: 60,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENCER 110",
    size: 179,
    max_height: 189,
    min_height: 179,
    max_weight: 75,
    min_weight: 60,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENCER 110",
    size: 187,
    max_height: 197,
    min_height: 187,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENCER 110",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  }



  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENCER 110",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70",
    size: 155,
    max_height: 170,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70",
    size: 164,
    max_height: 179,
    min_height: 169,
    max_weight: 63,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70",
    size: 172,
    max_height: 187,
    min_height: 177,
    max_weight: 76,
    min_weight: 63,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70",
    size: 180,
    max_height: 999,
    min_height: 193,
    max_weight: 999,
    min_weight: 88,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80',
    size: 164,
    max_height: 174,
    min_height: 164,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80',
    size: 172,
    max_height: 182,
    min_height: 172,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80',
    size: 180,
    max_height: 190,
    min_height: 180,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80',
    size: 188,
    max_height: 999,
    min_height: 188,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90',
    size: 160,
    max_height: 170,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90',
    size: 168,
    max_height: 178,
    min_height: 168,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90',
    size: 176,
    max_height: 186,
    min_height: 176,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90',
    size: 184,
    max_height: 194,
    min_height: 184,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90',
    size: 192,
    max_height: 999,
    min_height: 192,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100',
    size: 162,
    max_height: 172,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100',
    size: 170,
    max_height: 180,
    min_height: 170,
    max_weight: 67,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100',
    size: 178,
    max_height: 188,
    min_height: 178,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100',
    size: 186,
    max_height: 196,
    min_height: 186,
    max_weight: 94,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100',
    size: 194,
    max_height: 999,
    min_height: 194,
    max_weight: 999,
    min_weight: 94,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80',
    size: 164,
    max_height: 174,
    min_height: 164,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80',
    size: 172,
    max_height: 182,
    min_height: 172,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80',
    size: 180,
    max_height: 190,
    min_height: 180,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80',
    size: 188,
    max_height: 999,
    min_height: 188,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90',
    size: 160,
    max_height: 170,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90',
    size: 168,
    max_height: 178,
    min_height: 168,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90',
    size: 176,
    max_height: 186,
    min_height: 176,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90',
    size: 184,
    max_height: 194,
    min_height: 184,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90',
    size: 192,
    max_height: 999,
    min_height: 192,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100',
    size: 162,
    max_height: 172,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100',
    size: 170,
    max_height: 180,
    min_height: 170,
    max_weight: 67,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100',
    size: 178,
    max_height: 188,
    min_height: 178,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100',
    size: 186,
    max_height: 196,
    min_height: 186,
    max_weight: 94,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100',
    size: 194,
    max_height: 999,
    min_height: 194,
    max_weight: 999,
    min_weight: 94,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110",
    size: 171,
    max_height: 181,
    min_height: 0,
    max_weight: 60,
    min_weight: 0,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110",
    size: 179,
    max_height: 189,
    min_height: 179,
    max_weight: 75,
    min_weight: 60,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110",
    size: 187,
    max_height: 197,
    min_height: 187,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }



  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast'

  }




];