const path = require('path');  //para obtener path absoluto

// Reglas Compilacion de React JSX en ficheros .JS
const rulesForJS = {
    test: /\.js$/,   //*.js 
    loader: 'babel-loader', 
    //options: {presets:['@babel/preset-react']}
    //optimizar la carga de React, solo importa elementos necesarios:
    options: 
    { presets:
    [
        ['@babel/preset-react',
          { runtime: 'automatic'} /* default=classic */
        ]
    ]
    }    
}

//Reglas Compilacion CSS
const rulesForCSS = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {  
        path: path.join(__dirname,'build'), //path absoluto dir salida
    },
    //modulo babel para React JSX
    module: {
        rules: [ 
          rulesForJS, rulesForCSS
        ]
    },
}
