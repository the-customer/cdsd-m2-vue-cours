<template>
    <div class="cart">
        <header class="header">
            <slot name="header"/>
        </header>

        <div class="body">
            <slot/>
        </div>

        <footer class="actions">
            <slot name="actions"/>
        </footer>
    </div>
</template>

<style scoped>
    .header{
        padding: 12px 14px;
        border-bottom: 1px solid #f0f0f0;
        font-weight: 700;
    }
    .body{
        padding: 14px;
    }
    .actions{
        padding: 12px 14px;
        border-top: 1px solid #f0f0f0;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }
</style>