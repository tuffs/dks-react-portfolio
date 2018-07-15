var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{ test: /\.(scss)$/,
		    use: [{
		      loader: 'style-loader', // inject CSS to page
		    }, {
		      loader: 'css-loader', // translates CSS into CommonJS modules
		    }, {
		      loader: 'postcss-loader', // Run post css actions
		      options: {
		        plugins: function () { // post css plugins, can be exported to postcss.config.js
		          return [
		            require('precss'),
		            require('autoprefixer')
		          ];
		        }
		      }
		    },{
		      loader: 'sass-loader' // compiles Sass to CSS
		    }]
		  },
		  { test: /\.(png|svg|jpg|gif)$/,
       	use: [
        	 'file-loader'
       	]
       }
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'app/index.html'
	})],
	mode: "development"
}