import type { Plugin as VitePlugin } from 'vite'

import { createMockServer } from 'vite-plugin-mock'
import { isDevFn, ViteEnv } from '../utils'

/**
 * 创建vite插件
 * @param viteEnv
 */
export function createVitePlugins(viteEnv: ViteEnv): VitePlugin[] {
  const { VITE_USE_MOCK } = viteEnv
  const vitePlugins: VitePlugin[] = []
  if (isDevFn() && VITE_USE_MOCK) {
    // open mock
    vitePlugins.push(
      createMockServer({
        ignore: /^\_/,
        mockPath: 'mock',
        supportTs: true,
      })
    )
  }
  return vitePlugins
}
