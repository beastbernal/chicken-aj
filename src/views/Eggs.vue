<template>
    <div>
        <v-card
            class="mx-auto"
            outlined
        >   
            <v-card-title primary-title>
                <div>
                    Agregue el no. de huevos recolectados
                </div>
            </v-card-title>
            <v-card-text>
            <b-container fluid>
                <b-row class="my-1" v-for="type in types" :key="type.id">
                <b-col sm="3">
                    <label :for="`type-${type.id}`">Tipo {{ type.label }}:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input :id="`type-${type.id}`" v-model="type.value" type="number" size="lg"></b-form-input>
                </b-col>
                </b-row>
            </b-container>    
            
            <!-- <v-form v-model="valid">
                <v-container>
                <v-col>
                    <v-row
                    cols="12"
                    md="4"
                    >
                    <v-alert type="purple" :value="true" outlined>
                        
                    No total de huevos registrados {{totalEgg}}
                    </v-alert>
                    </v-row>
                    <v-row
                    cols="12"
                    md="4"
                    >
                    <label for="numEgg">No. de Huevos</label>
                    <v-text-field
                        solo
                        type="number" label="No. de Huevos" 
                        v-model="numEgg"
                        prepend-inner-icon="mdi-egg"
                    ></v-text-field>
                    </v-row>
                </v-col>
                </v-container>
            </v-form> -->
            </v-card-text>
            <v-card-actions>
                <v-btn block color="success" dark large @click="sumEggs()">Agregar
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>

export default {
    data: () => ({
        numEgg: 0,
        totalEgg: 18,
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        types: [
            {value: 0, label: 'Jumbo', id: 'jumbo'},
            {value: 0, label: 'AAA', id: 'aaa'},
            {value: 0, label: 'AA', id: 'aa'},
            {value: 0, label: 'A', id: 'a'},
            {value: 0, label: 'B', id: 'b'},
            {value: 0, label: 'C', id: 'c'},
            {value: 0, label: 'Roto', id: 'roto'},
        ]
    }),
    methods: {
        sumEggs () {
            let n = Number.parseInt(this.numEgg)
            let t = Number.parseInt(this.totalEgg)
            this.totalEgg = n + t
            this.numEgg = 0
        }
    },
}
</script>