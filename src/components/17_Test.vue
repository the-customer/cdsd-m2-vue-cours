<script setup>
import BaseCard from './17_Slot.vue'
</script>

<template>
    <section>
        <h2>17. Slots</h2>
        <p>Pouvoir creer un composant generique et on injecte du contenu depuis le parent.</p>

        <div class="grid">
            <BaseCard>
                <template #header>
                    Produit
                </template>
                <p>coucou</p>
                <template #actions>
                    <button class="btn">Details</button>
                    <button class="btn">Ajouter</button>
                </template>
            </BaseCard>
            <p>------</p>

            <BaseCard>
                <template #header>
                    Client
                </template>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus sapiente, quae quod libero quidem quibusdam commodi distinctio ea facere labore tempore earum laboriosam dignissimos animi, unde excepturi illum! Tenetur.</p>
                </div>
                <template #actions>
                    <button class="btn">Details</button>
                </template>
            </BaseCard>
        </div>
    </section>
</template>