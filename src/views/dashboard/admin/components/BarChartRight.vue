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
          text: '2015-2017 Top SciVal Institutes',
          left: 'bottom'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['University of Michigan, Ann Arbor', 'University of Maryland', 'University of California at Berkeley', 'University of New Hampshire', 'University of California at Los Angeles', 'University of Colorado Boulder']
        },
        series: [
          {
            name: '2015-2017 SciVal Scholarly Output',
            type: 'bar',
            data: [261, 276, 301, 435, 526, 618]
          },
          {
            name: 'Views Count / 10',
            type: 'bar',
            data: [180, 226, 386.7, 403, 579.1, 528.3]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
