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
          text: 'Top 10 Institute Representatives',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '40',
          data: ['VT', 'UMich', 'UCB', 'UCD', 'Yale', 'UCLA', 'UCR', 'BU', 'Lehigh', 'Brown']
        },
        series: [
          {
            name: 'University',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 1432, name: 'VT' },
              { value: 187, name: 'UMich' },
              { value: 150, name: 'UCB' },
              { value: 123, name: 'UCD' },
              { value: 95, name: 'Yale' },
              { value: 93, name: 'UCLA' },
              { value: 92, name: 'UCR' },
              { value: 90, name: 'BU' },
              { value: 82, name: 'Lehigh' },
              { value: 81, name: 'Brown' }
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
