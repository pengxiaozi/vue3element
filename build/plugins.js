import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import unocss from '@unocss/vite';

export function createVitePlugins() {
    const plugins = [
        vue({
            script: {
                defineModel: true,
            },
        }),
        vueJsx(),
        unocssPlugin(),
    ];

    return plugins;
}
 
function unocssPlugin() {
    return unocss();
}
