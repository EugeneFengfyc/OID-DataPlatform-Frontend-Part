<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        title: {
          text: '2017-2022 Total ICTAS supported faculty collaborations \n  by VT College',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '40',
          data: ['medicine & Liberal Arts and Human sciences', 'Science', 'Natural Resources and Environment',
            'Liberal Arts and Human sciences', 'Engineering', 'Agriculture and Life Sciences & Engineering', 'griculture and Life Sciences']
        },
        series: [
          {
            name: 'Role',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 1, name: 'medicine & Liberal Arts and Human sciences' },
              { value: 15, name: 'Science' },
              { value: 2, name: 'Natural Resources and Environment' },
              { value: 5, name: 'Liberal Arts and Human sciences' },
              { value: 38, name: 'Engineering' },
              { value: 4, name: 'Agriculture and Life Sciences & Engineering' },
              { value: 13, name: 'Agriculture and Life Sciences' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
