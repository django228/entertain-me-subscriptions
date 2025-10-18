import webpack from 'webpack';
import { BuildOptions } from './types/config';
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const assetLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff|svg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name].[hash:8][ext]',
        },
    };

    return [
        assetLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
