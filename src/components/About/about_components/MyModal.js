import React, { useState } from 'react';
import axios from 'axios';

import { Modal } from 'react-bootstrap';

const MyModal = (props) => {
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});

	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
		if (ok) {
			form.reset();
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: 'post',
			url: 'https://formspree.io/mjvraddr',
			data: new FormData(form),
		})
			.then((r) => {
				handleServerResponse(
					true,
					'Thank you! I will get back to you ASAP!',
					form
				);
			})
			.catch((r) => {
				handleServerResponse(false, r.response.data.error, form);
			});
	};

	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton className='px-5 pt-4'>
				<Modal.Title id='contained-modal-title-vcenter'>Contact</Modal.Title>
			</Modal.Header>
			<Modal.Body className='px-5 pb-5'>
				<div>
					<form onSubmit={handleOnSubmit}>
						<div className='form-group'>
							<label className='col-form-label' for='name'>
								Name:
							</label>
							<input
								className='form-control'
								id='name'
								type='text'
								name='name'
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Email:</label>
							<input
								className='form-control'
								id='email'
								type='email'
								name='email'
								required
							/>
						</div>
						<div className='form-group'>
							<label for='message' class='col-form-label'>
								Message:
							</label>{' '}
							<textarea
								className='form-control'
								id='message'
								type='text'
								name='message'
								rows='4'
								cols='50'
								required
							/>
						</div>
						<div className='row pl-3 text-success'>
							{serverState.status && (
								<p className={!serverState.status.ok ? 'errorMsg' : ''}>
									{serverState.status.msg}
								</p>
							)}
							<div className='col d-flex justify-content-end'>
								<button
									className='btn btn-primary mr-3'
									type='submit'
									disabled={serverState.submitting}
								>
									Submit
								</button>
								<button className='btn btn-light' onClick={props.onHide}>
									Close
								</button>
							</div>
						</div>
					</form>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default MyModal;
