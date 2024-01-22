<script lang="ts">
    import Chip, { Set, Text } from '@smui/chips';
    import type { Toyota } from '../types/toyota';
    import { hiddenCategoriesToyota } from '../state';
    
    export let toyotas: Toyota[];

    let categories = toyotas
    .map((toyota) => toyota.model)
    .filter((val, i, arr) => arr.indexOf(val) === i);

    let selected = Array.from(categories);

    function updateSelection() {
        hiddenCategoriesToyota.set(
            categories.filter((category) => !selected.includes(category))
        );
    }
</script>

<h4>Models</h4>

<Set 
    chips={categories} 
    let:chip 
    filter 
    bind:selected
    on:click={updateSelection}
>
    <Chip {chip} touch>
        <Text>{chip}</Text>
    </Chip>
</Set>