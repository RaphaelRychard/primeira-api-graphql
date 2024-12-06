/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'

import { CreateAppointmentInput } from '../dtos/inputs/create-appointments-input'
import { Appointment } from '../dtos/models/appointments-model'
import { Customer } from '../dtos/models/customer-model'

@Resolver(() => Appointment)
export class AppointmentsResolvers {
  @Query(() => [Appointment])
  async appointments() {
    const appointment = [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ]

    return appointment
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg('data', () => CreateAppointmentInput) data: CreateAppointmentInput,
  ) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }

    return appointment
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment)

    return {
      name: 'John Doe',
    }
  }
}
