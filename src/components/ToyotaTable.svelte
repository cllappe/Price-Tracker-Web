<script lang="ts">
    import DataTable, {Head, Body, Row, Cell } from '@smui/data-table';
    import type {Toyota} from '../types/toyota';
    import {hiddenCategoriesToyota} from '../state';

    export let toyotas: Toyota[];
</script>

<DataTable style="width: 100%">
    <Head>
        <Row>
            <Cell>Model</Cell>
            <Cell>Year</Cell>
            <Cell>Base MSRP</Cell>
            <Cell>Total MSRP</Cell>
            <Cell>Selling Price</Cell>
            <Cell>Advertised Price</Cell>
            <Cell>Options</Cell>
            <Cell>Interior Color</Cell>
            <Cell>External Color</Cell>
            <Cell>Dealer</Cell>
            <Cell>First Saw Date</Cell>
        </Row>
    </Head>
    <Body>
        {#each toyotas.filter((ty) => !$hiddenCategoriesToyota.includes(ty.model)) as toyota}
            <Row>
                <Cell>{toyota.model}</Cell>
                <Cell>{toyota.year}</Cell>
                <Cell>${toyota.baseMsrp}</Cell>
                <Cell>${toyota.totalMsrp}</Cell>
                <Cell>${toyota.sellingPrice}</Cell>
                <Cell>${toyota.advertizedPrice}</Cell>
                <Cell>{toyota.options}</Cell>
                <Cell>{toyota.intColor_nvsName}</Cell>
                <Cell>{toyota.extColor_nvsName}</Cell>
                <Cell>{toyota.dealer}</Cell>
                <Cell>{toyota.addedDate}</Cell>
            </Row>
        {/each}
    </Body>
</DataTable>