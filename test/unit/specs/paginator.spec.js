import Vue from 'vue'
import paginator from '@/components/paginator'

describe('paginator.vue', () => {
  it('should be correct page number', () => {
    const Constructor = Vue.extend(paginator)
    const vm = new Constructor({
      propsData: {
        pages: 10,
        value: 1
      }
    }).$mount()
    expect(vm.currentPage)
      .to.equal(1)
  })

  it('Try set too big page', (done) => {
    const Constructor = Vue.extend(paginator)
    const vm = new Constructor({
      propsData: {
        pages: 10,
        value: 1
      }
    }).$mount()

    vm.value = 30
    Vue.nextTick().then(() => {
      expect(vm.currentPage)
        .to.equal(10)
    }).then(done, done)
  })

  it('test change current page', (done) => {
    const Constructor = Vue.extend(paginator)
    const vm = new Constructor({
      propsData: {
        pages: 10,
        value: 1
      }
    }).$mount()

    vm.value = 3
    Vue.nextTick().then(() => {
      expect(vm.currentPage)
        .to.equal(3)
    }).then(done, done)
  })
})
