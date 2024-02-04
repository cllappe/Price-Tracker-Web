<script lang="ts">
    import type {Toyota} from '../types/toyota';
    import Grid from 'gridjs-svelte';

    export let toyotas: Toyota[];
    let columns = [
        'Model', 
        'Year', 
        'Base MSRP', 
        'Total MSRP', 
        'Selling Price', 
        'Advertised Price', 
        'Options', 
        'Interior Color', 
        'External Color', 
        'Dealer', 
        'First Saw Date'
    ];
    let data = toyotas.map((toyota) => {
        return [
            toyota.model, 
            toyota.year, 
            toyota.baseMsrp, 
            toyota.totalMsrp, 
            toyota.sellingPrice, 
            toyota.advertizedPrice, 
            toyota.options, 
            toyota.intColor_nvsName, 
            toyota.extColor_nvsName, 
            toyota.dealer, 
            toyota.addedDate];
    });
</script>

<Grid
columns={columns}
data={data}
sort
search
pagination={{enabled: true, limit: 10}} 
fixedHeader={{enabled: true}}
resizable={{enabled: true}}
/>

<style>
    @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>


