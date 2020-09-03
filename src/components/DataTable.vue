<template>
  <v-card>
      <v-card-title>
        Users
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.email }}</td>
          <td class="text-xs-left">{{ props.item.website }}</td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
</template>

<script>

export default {
 data () {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' ,},
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Website', value: 'website' },
      ],
      items: []
    }
  },
  created: function(){
      this.getData()
  },
  methods: {
      getData() {
    const vm = this;
    vm.axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      var result = response && response.data;
      vm.items = result;
    });
  }
  },
}
</script>

<style>
  .table {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
