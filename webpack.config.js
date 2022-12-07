const HtmlWebpackPlugin = require('html-webpack-plugin');
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
//Reglas Compilacion SCSS
const rulesForSCSS = {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
}

module.exports = (env, args)=>{
    const {mode} = args
    const esProduccion = mode ==='production'

    return {
        mode: 'development',
        entry: './src/index.js',
        output: {  
            filename: esProduccion?'[name].[contenthash].js' :  'main.js',
            path: path.join(__dirname,'build'), //path absoluto dir salida
        },
        //plugins
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html'})
        ],
        //modulo babel para React JSX
        module: {
            rules: [ 
            rulesForJS, rulesForCSS, rulesForSCSS
            ]
        },
        devServer: {
            open: true, //abrir navegador
            port: 8081, //indicar el puerto para dev server
            //overlay: true //mostrar errores en navegador (basico)
        },
        devtool: 'source-map'
    }
}
