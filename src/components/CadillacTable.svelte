<script lang="ts">
    import type {Cadillac} from '../types/cadillac';
    import Grid from 'gridjs-svelte';
    
    export let cadillacs: Cadillac[];
    let columns = [
        "Make", 
        "Model",
        "Drive Type", 
        "Year",
        "Net Price",
        "MSRP", 
        "Selling Price", 
        "Discounts", 
        "Color", 
        "Dealer", 
        "First Saw Date"
];
    let data = cadillacs.map((cadillac) => {
        return [
            cadillac.make, 
            cadillac.model, 
            cadillac.driveType, 
            cadillac.year, 
            cadillac.netPrice, 
            cadillac.msrp, 
            cadillac.sellingPrice, 
            cadillac.discounts, 
            cadillac.color, 
            cadillac.dealer, 
            cadillac.addedDate];
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