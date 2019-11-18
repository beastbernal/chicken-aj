<template>
    <div style="padding: 0 0 80px 0;">
        shed
        {{shed.initialDate}}
        {{this.$moment()}}
        today 2019-11-07
        {{this.$moment(this.today).format('YYYY-MM-DD HH:mm')}}
        this.$moment(this.today).diff(this.$moment(shed.initialDate), 'week')
        {{this.$moment(this.today).diff(this.$moment(shed.initialDate), 'week')}}
        <!-- {{today}} -->
        <v-card
            class="mx-auto"
            outlined
        >   
            <div>
            <v-alert
            class="pa-0"
            text
            dense
            type="success"
            icon="mdi-egg"
            >
                <v-icon>mdi-plus</v-icon>
                Galpon <strong>{{shed.id}}</strong>
                <v-spacer></v-spacer>
                <v-icon>mdi-plus</v-icon>
                <v-icon>mdi-calendar-range</v-icon>
            </v-alert>
            <v-alert
            class="pa-0"
            text
            dense
            type="warning"
            icon="mdi-egg"
            >
                Total Huevos Recolectados <strong>{{numEgg}}</strong>
            </v-alert>
            </div>
            <v-card-text>
            <b-container fluid class="pa-0">
                <b-row  v-for="type in types" :key="type.id">
                <b-col sm="3">
                    <label :for="`type-${type.id}`">Tipo {{ type.label }}:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input :id="`type-${type.id}`" v-model="type.value" type="number" 
                    @input="sumEggs()"
                    size="lg"></b-form-input>
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
            <v-alert
                text
                dense
                color="teal"
                icon="mdi-clock-fast"
                border="left"
                >
                Cada 5 minutos se guardara automaticamente, para terminar el conteo de clic en terminar
            </v-alert>
            <v-card-actions>
                <v-btn block color="success" dark large @click="sumEggs()">Terminar
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data: () => ({
        numEgg: 0,
        // totalEgg: 18,
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
        ],
        today: null
    }),
    methods: {
        sumEggs () {
            this.numEgg = 0;
            for (let index = 0; index < this.types.length; index++) {
                const element = this.types[index];
                element.value = Number.isInteger(parseInt(element.value.toString())) ? parseInt(element.value.toString()) : 0;
                this.numEgg += element.value; 
            }
        }
    },
    computed: mapState({
        // arrow functions can make the code very succinct!
        count: state => state.count,
        shed: state => state.shed,

        // passing the string value 'count' is same as `state => state.count`
        countAlias: 'count',

        // to access local state with `this`, a normal function must be used
        countPlusLocalState (state) {
            return state.count + this.localCount
        }
    }),
    created() {
        this.today = this.$moment();
    },
}
</script>