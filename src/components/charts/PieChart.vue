<script>
  import { Pie } from 'vue-chartjs'

  export default {
    extends: Pie,
    data () {
      return {
        chartData: {
          labels: ["Inactive", "Active",],
          datasets: [{
              borderWidth: 1,
              borderColor: [
              '#fff',
              '#fff',           
              ],
              backgroundColor: [
              '#7cb6ed',
              '#424348',              
              ],
              data: [700,1000]
            }]
        },
        options: {
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>