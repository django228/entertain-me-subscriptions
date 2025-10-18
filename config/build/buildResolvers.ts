import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions) : ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            'components': options.paths.src + '/components',
            'helpers': options.paths.src + '/helpers',
            'styles': options.paths.src + '/styles',
            'types': options.paths.src + '/types',
        }, // for short import
    };
}
