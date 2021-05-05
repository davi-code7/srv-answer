import OrchyBase from 'orchy-base-code7';
import SnsSqsSlq from 'sns-sqs-slq-code7';

const orchybase = new OrchyBase(false);
const snsSqs = new SnsSqsSlq();

export async function storeAnswer(req, res) {
  try {
    const {
      api_key,
      id_contact_data,
      id_load,
      id_flow,
      id_item,
      schedule,
      contact,
      event_type,
      data_type,
      contact_data,
      state,
      message,
      sent,
      conditions,
      escape,
    } = req.body;

    if (process.env.NODE_ENV === 'development') {
      await orchybase.createQueueContact({
        api_key,
        id_contact_data,
        id_load,
        id_flow,
        id_item,
        schedule,
        contact,
        event_type,
        data_type,
        contact_data,
        state,
        message,
        sent,
        conditions,
        escape,
      });

      return res.status(200).send({ ok: true });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}
