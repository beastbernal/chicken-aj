<template>
    <div>
        {{shed}}
        <v-alert
        prominent
        type="success"
        >
        <v-row align="center">
            <v-col class="grow">Agregue un galpon con la fecha inicial de las aves, número de aves y el tipo de ave</v-col>
            <v-col class="shrink">
            <v-btn color="white" outlined dark @click="addBasic()">Agregar galpon
                <v-icon>mdi-cowboy</v-icon>
            </v-btn>
            </v-col>
        </v-row>
        </v-alert>
        <v-card v-for="(shed, i) in sheds" :key="i">
            <v-card-title primary-title>
                Galpon {{shed.id}}
            </v-card-title>
            <v-card-text>
                <b-form>
                    <b-form-group
                        label="Nombre del Galpon:"
                        :label-for="'input-' + shed.id"
                        description="Escriba un nombre para recordar facilmente el galpon"
                    >
                        <b-form-input
                        :id="'input-' + shed.id"
                        :name="'input-' + shed.id"
                        v-model="shed.label"
                        type="text"
                        required
                        placeholder="Nombre del Galpon"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Fecha Inicial:" 
                        :label-for="'d-' + shed.id">
                        <b-form-input
                        :id="'d-' + shed.id"
                        :name="'d-' + shed.id"
                        v-model="shed.initialDate"
                        type="date"
                        required
                        placeholder="Fecha de Ingreso del Galpon"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="No. de Gallinas" 
                        :label-for="'n-' + shed.id">
                        <b-form-input
                        :id="'n-' + shed.id"
                        :name="'n-' + shed.id"
                        v-model="shed.initialNumber"
                        type="number"
                        required
                        placeholder="No. de Gallinas"
                        ></b-form-input>
                    </b-form-group>


                    <!-- <b-form-group id="input-group-4">
                        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group> -->

                    <b-button @click="create(shed)" variant="success">Guardar <v-icon right>mdi-check-circle</v-icon></b-button>
                    <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                    </b-form>
            </v-card-text>
        </v-card>
        <!-- {{sheds}}
        {{basic}} -->
        
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data: () => ({
        sheds: [],
        basic: {
            id: '',
            label: '',
            initialDate: '',
            initialNumber: '',
            name: '',
            number: ''
        }
    }),
    methods: {
        addBasic: function(){
            let b = Object.assign({}, this.basic)
            b.id = this.sheds.length + 1;
            this.sheds.push(b)
        },
        create: function(shed){
            this.$store.commit('edit', shed);
            this.$router.push('/eggs');
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
        
    },
}
</script>