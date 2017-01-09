import Vue from 'vue'
import Gallery from 'src/components/Gallery'

describe('Gallery.vue', () => {
  it('should render items', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Gallery)
    })
    expect(vm.$data.items).to.be.an.array
    // and so on
  })
})
