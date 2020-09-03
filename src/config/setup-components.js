// Core Components
import Toolbar from '../components/core/Toolbar.vue';
import Navigation from '../components/core/NavigationDrawer.vue';
import DataTable from '../components/DataTable.vue';
import BarChart from '../components/charts/BarChart.vue';
import PieChart from '../components/charts/PieChart.vue';

function setupComponents(Vue){

  Vue.component('toolbar', Toolbar);
  Vue.component('navigation', Navigation);
 
  Vue.component('data-table', DataTable);
  Vue.component('bar-chart',BarChart);
  Vue.component('pie-chart',PieChart);
}

export {
  setupComponents
}
